<?php

include( plugin_dir_path( __FILE__ ) . 'block-rendering/hero-block.php' );

class UrbanHeatATL_Blocks {
  const STYLES = array(
    'admin',
    'hero',
  );
  const SCRIPTS = array(
    'index',
  );
  const DEPENDENCIES = array(
    'wp-blocks',
    'wp-i18n',
    'wp-editor',
    'wp-date',
  );
  function actions__editor() {
    add_action( 'enqueue_block_editor_assets', function() {
      $styles = constant( __CLASS__ . '::STYLES' );
      $scripts = constant( __CLASS__ . '::SCRIPTS' );
      $dependencies = constant( __CLASS__ . '::DEPENDENCIES' );
      $style_url = plugin_dir_url( __FILE__ ) . '/editor/css/';
      $script_url = plugin_dir_url( __FILE__ ) . '/editor/js/';
      foreach ( $styles as $style ) {
        wp_enqueue_style(
          'urbanheat-' . $style, 
          $style_url . $style . '.css' 
        );
      }
      foreach ( $scripts as $script ) {
        wp_enqueue_script(
          'urbanheat-' . $script,
          $script_url . $script . '.js',
          $dependencies
        );
      }
    } );
  }
  function filters__editor() {
    
  }
  function __construct() {
    $this->actions__editor();
    $this->filters__editor();
  }
}