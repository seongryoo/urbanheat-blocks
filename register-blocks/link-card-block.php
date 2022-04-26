<?php

class LinkCardBlock {
  const BLOCK_NAME = 'uha-data/link-card';
  const ATTRIBUTES = array(
    'title' => array(
      'type' => 'string',
    ),
    'desc' => array(
      'type' => 'string',
    ),
    'linkUrl' => array(
      'type' => 'string',
    ),
    'imgUrl' => array(
      'type' => 'string',
    ),
    'imgAlt' => array(
      'type' => 'string',
    ),
    'imgId' => array(
      'type' => 'number',
    ),
  );
  function render_block( $attributes, $content ) {
    $title = $attributes[ 'title' ];
    $desc = $attributes[ 'desc' ];
    $img_url = $attributes[ 'imgUrl' ];
    $img_alt = $attributes[ 'imgAlt' ];
    $img_id = $attributes[ 'imgId' ];
    $link_url = $attributes[ 'linkUrl' ];

    $markup = '';
    $markup .= '<div class="card carousel__card carousel--2-col__card">';
      $markup .= '<a class="card__link" href="' . esc_url( $link_url ) . '">';
        $markup .= '<img src="' . esc_url( $img_url ) . '" alt="' . esc_attr( $img_alt ) . '" class="card__link__image">';
        $markup .= '<span class="card__link__text">' . esc_html( $title ) . '</span>';
        $markup .= '<div class="card__link__description">' . $desc . '</div>';
      $markup .= '</a>';
    $markup .= '</div>'; // .card
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

$link_card_block = new LinkCardBlock();