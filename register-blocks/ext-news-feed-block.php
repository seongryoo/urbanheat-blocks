<?php

class ExternalNewsFeedBlock {
  const BLOCK_NAME = 'urbanheat/ext-news-feed';
  const ATTRIBUTES = array(
    'isNewestFirst' => array(
      'type' => 'boolean',
      'default' => TRUE,
    ),
    'numArticles' => array(
      'type' => 'string',
      'default' => '3',
    ),
  );
  function normalize_date( $id ) {
    $date = get_post_meta( $id, 'ext_news__date', true );
    $date_formatted = strtotime( $date );
    return $date_formatted;
  }
  function compare_desc( $id1, $id2 ) {
    $date1 = $this->normalize_date( $id1 );
    $date2 = $this->normalize_date( $id2 );
    return -( $date1 <=> $date2 );
  }
  function compare_asc( $id1, $id2 ) {
    $date1 = $this->normalize_date( $id1 );
    $date2 = $this->normalize_date( $id2 );
    return ( $date1 <=> $date2 );
  }
  function render_news_card( $id, $num_cols ) {
    $title = get_the_title( $id );
    $date = get_post_meta( $id, 'ext_news__date', true );
    $link = get_post_meta( $id, 'ext_news__link', true );
    $img = get_post_meta( $id, 'ext_news__img', true );
    $img_alt = get_post_meta( $img, '_wp_attachment_image_alt', true );
    $img_src = wp_get_attachment_image_src( $img, 'full' )[0];
    $news_source = get_post_meta( $id, 'ext_news__source', true );
    $date_obj = date_create( $date );
    $date_label = date_format( $date_obj, 'M j, Y' );

    $card = '';
    $card .= '<li class="card carousel--' . $num_cols . '-col__card carousel__card">';
      $card .= '<a href="' . esc_url( $link ) . '" class="card__link">';
        $card .= '<img class="card__link__image" src="' . esc_url( $img_src ) . '" alt="' . esc_attr( $img_alt ) . '">';
        $card .= '<span class="card__link__text">' . $title . '</span>';
        $card .= '<div class="card__link__description">';
          $card .= '<p class="carousel__card__link__description__news-source">'; 
            $card .= '<span class="visually-hidden">Source: </span>' . esc_html( $news_source );
          $card .= '</p>';
          $card .= '<p class="carousel__card__link__description__news-date">'; 
            $card .= '<span class="visually-hidden">Published </span>' . esc_html( $date_label );
          $card .= '</p>';
        $card .= '</div>';
      $card .= '</a>';
    $card .= '</li>';
    return $card;
  }
  function render_block( $attributes, $content ) {
    $num_cols = 3;
    // Attribute retrieval
    $is_newest_first        = $attributes[ 'isNewestFirst' ];
    $num_articles           = $attributes[ 'numArticles' ];
    $show_all               = $attributes[ 'showAll' ];

    $markup = '';
    $markup .= '<div class="ext-news">';
    $markup .= '<ul class="legible carousel carousel--' . $num_cols . '-col">';
      $query = new WP_Query( array(
        'post_type'       => 'ext_news',
        'posts_per_page'  => -1,
      ) );
      $article_ids = array();
      if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
          $query->the_post();
          $id = get_the_ID();
          array_push( $article_ids, $id );
        }
      }
      if ( $is_newest_first ) {
        usort( $article_ids, function( $a, $b ) {
          return $this->compare_desc( $a, $b );
        } );
      } else {
        usort( $article_ids, function( $a, $b ) {
          return $this->compare_asc( $a, $b );
        } );
      }
      $count_articles = 0;
      foreach( $article_ids as $id ) {
        $markup .= $this->render_news_card( $id, $num_cols );
        $count_articles++;
        if ( $num_articles != 'ALL' && $count_articles >= intval( $num_articles ) ) {
          break;
        }
      }
      for( $i = 0; $i < 3; $i++ ) {
        $markup .= '<div class="card--dummy carousel__card--dummy carousel--' . $num_cols . '-col__card--dummy"></div>';
      }
    $markup .= '</ul>';
    $markup .= '</div>';
    return $markup;
  }
  function actions__init() {
    add_action( 'init', function() {
      if ( ! function_exists( 'register_block_type' ) ) {
        return;
      }
      register_block_type( constant( __CLASS__ . '::BLOCK_NAME' ), 
        array(
          'attributes' => constant( __CLASS__ . '::ATTRIBUTES' ),
          'render_callback' => array( $this, 'render_block' ),
        ) 
      );
    } );
  }
  function __construct() {
    $this->actions__init();
  }
}

$ext_news_feed_block = new ExternalNewsFeedBlock();