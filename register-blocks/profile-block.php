<?php

class ProfileBlock {
  const BLOCK_NAME = 'urbanheat/profile';
  const ATTRIBUTES = array(
    'name' => array(
      'type' => 'string',
    ),
    'desc' => array(
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
    $name = $attributes[ 'name' ];
    $desc = $attributes[ 'desc' ];
    $img_url = $attributes[ 'imgUrl' ];
    $img_alt = $attributes[ 'imgAlt' ];
    $img_id = $attributes[ 'imgId' ];
    $markup = '';
    $markup .= '<div class="profile 
                            windsock 
                            windsock--narrow 
                            windsock--centered 
                            carousel__card
                            carousel--1-col__card
                            ">';
      if ( $img_url && $img_url != "" ) {
        $markup .= '<img src="' . esc_url( $img_url ) . '" ';
        $markup .= 'alt="' . esc_attr( $img_alt ) . '" ';
        $markup .= 'class="profile__image 
                           windsock__image 
                           windsock__left 
                           windsock__image--square
                           windsock__image--rounded
                           ">';
      } else {
        $markup .= '<div class="windsock__image
                                windsock__left
                                windsock__image--square
                                windsock__image--rounded
                                profile__image
                                profile__image--empty"></div>';
      }
      $markup .= '<div class="profile__text windsock__right">';
        $markup .= '<div class="profile__text__name">' . esc_html( $name ) . '</div>';
        $markup .= '<div class="profile__text__desc">' . $desc . '</div>';
      $markup .= '</div>'; // .profile__text
    $markup .= '</div>'; // .profile
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

$profile_block = new ProfileBlock();