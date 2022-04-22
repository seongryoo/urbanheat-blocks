<?php

class LogoGallery {
  const BLOCK_NAME = 'urbanheat/logo-gallery';
  const ATTRIBUTES = array(
    
  );
  function render_block( $attributes, $content ) {
    $markup = '';
    $markup .= '<div class="logo-gallery legible">';
      $markup .= $content;
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

$logo_gallery = new LogoGallery();