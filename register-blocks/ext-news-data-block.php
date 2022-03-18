<?php

class ExternalNewsDataBlock {
  const BLOCK_NAME = 'urbanheat/ext-news-data';
  const ATTRIBUTES = array(
    'img' => array(
      'type'    => 'number',
      'source'  => 'meta',
      'meta'    => 'ext_news__img'
    ),
    'img_url' => array(
      'type'    => 'number',
      'source'  => 'string',
      'meta'    => 'ext_news__img_url'
    ),
    'source' => array(
      'type'    => 'number',
      'source'  => 'string',
      'meta'    => 'ext_news__source'
    ),
    'link' => array(
      'type'    => 'number',
      'source'  => 'string',
      'meta'    => 'ext_news__link'
    ),
    'date' => array(
      'type'    => 'number',
      'source'  => 'string',
      'meta'    => 'ext_news__date'
    ),
  );
  function actions__init() {
    add_action( 'init', function() {
      if ( ! function_exists( 'register_block_type' ) ) {
        return;
      }
      register_block_type( constant( __CLASS__ . '::BLOCK_NAME' ), 
        array(
          'attributes' => constant( __CLASS__ . '::ATTRIBUTES' ),
        ) 
      );
    } );
  }
  function __construct() {
    $this->actions__init();
  }
}

$ext_news_data_block = new ExternalNewsDataBlock();