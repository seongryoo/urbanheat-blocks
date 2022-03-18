<?php

/**
 * Plugin Name: UrbanHeatATL blocks
 */

include( plugin_dir_path( __FILE__ ) . 'class-blocks.php' );
include( plugin_dir_path( __FILE__ ) . 'class-custom-posts.php' );
$uha_blocks = new UrbanHeatATL_Blocks();
$uha_posts = new UrbanHeatATL_CustomPosts();