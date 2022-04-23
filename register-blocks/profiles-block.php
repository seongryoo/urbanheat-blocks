<?php

class ProfilesBlock {
  const BLOCK_NAME = 'urbanheat/profile-showcase';
  const ATTRIBUTES = array(
    
  );
  function render_block( $attributes, $content ) {
    $markup = '';
    $markup .= '<div class="legible profiles-showcase carousel carousel--1-col">';
      $markup .= $content;
      $markup .= '<div class="carousel__card--dummy"></div>';
      $markup .= '<div class="carousel__card--dummy"></div>';
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

$showcase_block = new ProfilesBlock();