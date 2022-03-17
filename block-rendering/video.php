<?php

class VideoBlock {
  const BLOCK_NAME = 'urbanheat/video-block';
  const ATTRIBUTES = array(
    'headingContent' => array(
      'type' => 'string'
    ),
    'isVideoLeft' => array(
      'type' => 'boolean',
      'default' => TRUE,
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
    $is_video_left          = $attributes[ 'isVideoLeft' ];
    $video_iframe           = $content;

    var_dump( $content );
    var_dump( $attributes );
    return null;
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

$video_block = new VideoBlock();