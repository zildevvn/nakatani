<?php

/**
 * Use this file to register any custom post types you wish to create.
 */
if (!function_exists('nakatani_create_custom_post_type')) {
	// Register Custom Post Type
	function nakatani_create_custom_post_type()
	{
		register_post_type('wines', array(
			'labels' => array(
				'name' => __('Wines'),
				'singular_name' => __('Wines'),
				'add_new' => __('Add New'),
				'add_new_item' => __('Add New Wines'),
				'edit_item' => __('Edit Wine'),
				'new_item' => __('New Wine'),
				'view_item' => __('View Wine'),
				'search_items' => __('Search Wine'),
				'not_found' => __('Not found'),
				'not_found_in_trash' => __('Not found in Trash'),
				'all_items' => __('All Wines'),
				'menu_name' => __('Wines'),
			),
			'label' => __('Wine', 'nakatani'),
			'supports' => array('title', 'thumbnail','revisions'),
			'menu_icon' => 'dashicons-palmtree',
			'hierarchical' => false,
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 5,
			'show_in_admin_bar' => true,
			'show_in_nav_menus' => true,
			'can_export' => true,
			'has_archive' => false,
			'exclude_from_search' => false,
			'publicly_queryable' => true,
			'capability_type' => 'post',
			'show_in_rest' => true,
		));
	}

	add_action('init', 'nakatani_create_custom_post_type', 0);
}

if (!function_exists('nakatani_create_custom_taxonomy')) {
	function nakatani_create_custom_taxonomy()
	{

	}

	add_action('init', 'nakatani_create_custom_taxonomy', 0);
}
