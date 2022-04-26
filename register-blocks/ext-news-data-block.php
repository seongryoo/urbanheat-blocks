<?php

class ExternalNewsDataBlock {
  const BLOCK_NAME = 'uha-data/ext-news-data';
  function actions__init() {
    add_action( 'init', function() {
      if ( ! function_exists( 'register_block_type' ) ) {
        return;
      }
      register_block_type( constant( __CLASS__ . '::BLOCK_NAME' ) );
    } );
  }
  function __construct() {
    $this->actions__init();
  }
}

$ext_news_data_block = new ExternalNewsDataBlock();