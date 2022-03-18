<?php

class HeroBlock {
  const BLOCK_NAME = 'urbanheat/hero-block';
  const ATTRIBUTES = array(
    'headingContent' => array(
      'type' => 'string'
    ),
    'isGraphicLeft' => array(
      'type' => 'boolean',
      'default' => TRUE,
    ),
    'isVideo' => array(
      'type' => 'boolean',
      'default' => FALSE,
    ),
    'isCaption' => array(
      'type' => 'boolean',
      'default' => FALSE,
    ),
    'captionContent' => array(
      'type' => 'string',
    ),
    'isCallToAction' => array(
      'type' => 'boolean',
      'default' => FALSE,
    ),
    'callToActionText' => array(
      'type' => 'string',
    ),
    'callToActionUrl' => array(
      'type' => 'string',
    ),
  );
  function render_block( $attributes, $content ) {
    // Attribute retrieval
    $heading_content        = $attributes[ 'headingContent' ];
    $caption_content        = $attributes[ 'captionContent' ];
    $call_to_action_text    = $attributes[ 'callToActionText' ];
    $call_to_action_url     = $attributes[ 'callToActionUrl' ];
    $is_caption             = $attributes[ 'isCaption' ];
    $is_call_to_action      = $attributes[ 'isCallToAction' ];
    $is_video               = $attributes[ 'isVideo' ];
    $is_graphic_left        = $attributes[ 'isGraphicLeft' ];
    $graphic_iframe         = $content;

    $text_content = '<div class="hero__content__text">';
      $text_content .= '<div class="hero__content__text__heading">' . $heading_content . '</div>';
      if ( $is_caption ) {
        $text_content .= '<div class="hero__content__text__caption">' . $caption_content . '</div>';
      }
      if ( $is_call_to_action ) {
        if ( $is_caption ) {
          $text_content .= "<a class=\"button button--gradient hero__content__text__button\" href=\"{$call_to_action_url}\">{$call_to_action_text}</a>";  
        } else {
          $text_content .= "<a class=\"button button--gradient hero__content__text__button hero__content__text__button--no-caption\" href=\"{$call_to_action_url}\">{$call_to_action_text}</a>";  
        }
      }
    $text_content .= '</div>';
    if ( $is_video ) {
      $graphic = '<div class="hero__content__video">' . $graphic_iframe . '</div>';
    } else {
      $graphic = '<div class="hero__content__image">' . $graphic_iframe . '</div>';
    }

    // Image/text direction setting
    if ( $is_graphic_left ) {
      $left_content = $graphic;
      $right_content = $text_content;
    } else {
      $left_content = $text_content;
      $right_content = $graphic;
    }

    return "<div class=\"hero\">
              <div class=\"hero__content hero__content--left\">
                {$left_content}
              </div>
              <div class=\"hero__content hero__content--right\">
                {$right_content}
              </div>
            </div>";
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

$hero_block = new HeroBlock();