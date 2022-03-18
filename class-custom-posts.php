<?php
class UrbanHeatATL_CustomPosts {
  function init__register_taxonomy() {
    $args = array(
      'hierarchical'            => false,
      'label'                   => __( 'Tags', 'urbanheat-blocks' ),
      'singular_name'           => __( 'Tag', 'urbanheat-blocks' ),
      'rewrite'                 => true,
      'query_var'               => true,
    );
    register_taxonomy( 'ext-news-tags', 'ext-news', $args );
  }
  function init__register_ext_news() {
    $labels = array(
      'name'                    => __( 'External News', 'urbanheat-blocks' ),
      'singular_name'           => __( 'Article', 'urbanheat-blocks' ),
      'menu_name'               => __( 'External News', 'urbanheat-blocks' ),
      'add_new'                 => __( 'Add New', 'urbanheat-blocks' ),
      'add_new_item'            => __( 'Add New Article', 'urbanheat-blocks' ),
      'new_item'                => __( 'New Article', 'urbanheat-blocks' ),
      'edit_item'               => __( 'Edit Article', 'urbanheat-blocks' ),
      'view_item'               => __( 'View Article', 'urbanheat-blocks' ),
      'all_items'               => __( 'All External News', 'urbanheat-blocks' ),
      'search_items'            => __( 'Search External News', 'urbanheat-blocks' ),
      'not_found'               => __( 'No articles found.', 'urbanheat-blocks' ),
      'not_found_in_trash'      => __( 'No articles found in Trash.', 'urbanheat-blocks' ),
      'archives'                => __( 'External News archives', 'urbanheat-blocks' ),
      'filter_items_list'       => __( 'Filter external articles list', 'urbanheat-blocks' ),
      'items_list_navigation'   => __( 'External articles list navigation', 'urbanheat-blocks' ),
      'items_list'              => __( 'External articles list', 'urbanheat-blocks' ),
    );
    $args = array(
      'labels'                  => $labels,
      'public'                  => true,
      'menu_icon'               => 'dashicons-id-alt',
      'show_in_rest'            => true,
      'publicly_queryable'      => false,
      'taxonomies'                => array( 'ext-news-tags' )
    );
    $supports = array(
      'custom-fields',
    );
    register_post_type( 'ext_news', $args );
    add_post_type_support( 'ext_news', $supports );
  }
  function init__register_ext_news_meta() {
    $args = array(
      'show_in_rest'            => true,
      'single'                  => true,
      'type'                    => 'string',
    );
    $fileArgs = array(
      'show_in_rest'            => true,
      'single'                  => true,
      'type'                    => 'number',
    );
    register_post_meta( 'ext_news', 'ext_news__img', $fileArgs );
    register_post_meta( 'ext_news', 'ext_news__img_url', $args );
    register_post_meta( 'ext_news', 'ext_news__source', $args );
    register_post_meta( 'ext_news', 'ext_news__link', $args );
    register_post_meta( 'ext_news', 'ext_news__date', $args );
  }
  function init__register_block_template() {
    $ext_news_object = get_post_type_object( 'ext_news' );
    $ext_news_object->template = array(
      array( 'urbanheat/ext-news-data' ),
    );
    $ext_news_object->template_lock = 'all';
  }
  function actions__editor() {
    add_action( 'init', function() {
      $this->init__register_taxonomy();
      $this->init__register_ext_news();
      $this->init__register_ext_news_meta();
      $this->init__register_block_template();
    } );
  }
  function filters__editor() {
    add_filter( 'enter_title_here', function( $input ) {
      if ( 'ext_news' === get_post_type() ) {
        return 'Article title';
      }
      return $input;
    } );
    add_filter( 'manage_ext_news_posts_columns', function( $columns ) {
      $columns[ 'date' ] = 'Post created';
      $columns[ 'article_source' ] = 'News source';
      $columns[ 'article_date' ] = 'Article date';
      $columns[ 'ext_news_tags' ] = 'Tags';
      return $columns;
    } );
    add_filter( 'manage_ext_news_posts_custom_column', function( $column, $post_id ) {
      switch ( $column ) {
        case 'article_date':
          $date = get_post_meta( $post_id, 'ext_news__date', true );
          if ( ! $date ) {
            echo 'No article publish date provided';
          } else {
            $date_obj = date_create( $date );
            $date_label = date_format( $date_obj, 'F jS, Y' );
            $date_day = date_format( $date_obj, 'l' );
            echo $date_label . '<br>' . $date_day;
          }
          break;
        case 'article_source':
          $source = get_post_meta( $post_id, 'ext_news__source', true );
          if ( ! $source ) {
            echo 'No source provided';
          } else {
            echo $source;
          }
          break;
        case 'ext_news_tags':
          $tags = wp_get_post_terms( $post_id, 'ext-news-tags', array( 'fields' => 'names' ) );
          if ( sizeof( $tags ) == 0 ) {
            echo 'No tags';
          } else {
            echo implode( ', ', $tags );
          }
          break;
      }
    }, 10, 2 );
    
  }
  function __construct() {
    $this->actions__editor();
    $this->filters__editor();
  }
}