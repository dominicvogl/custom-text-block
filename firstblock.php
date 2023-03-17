<?php
/**
 * Plugin Name: First Block
 * Plugin URI: https://example.com/plugins/first-block/
 * Description: This is a simple WordPress plugin that adds a custom block to the Gutenberg editor.
 * Version: 1.0.0
 * Author: Dominic Vogl
 * Author URI: https://dominicvogl.de/
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: first-block
 *
 * @package First_Block
 */

// Plugin code goes here.

/**
 * register my block type from metadata "block.json"
 */
function firstblock_init() {

	register_block_type_from_metadata(__DIR__);

}

add_action("init", "firstblock_init");

