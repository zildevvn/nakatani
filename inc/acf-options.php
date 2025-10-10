<?php
add_filter('acf/settings/save_json', 'nakatani_acf_json_save_point');
function nakatani_acf_json_save_point($path)
{
	// update path
	$path = get_stylesheet_directory() . '/inc/acf-options';

	// return
	return $path;
}

add_filter('acf/settings/load_json', 'nakatani_acf_json_load_point');
function nakatani_acf_json_load_point($paths)
{
	// remove original path (optional)
	unset($paths[0]);
	// append path
	$paths[] = get_stylesheet_directory() . '/inc/acf-options';

	// return
	return $paths;
}

function nakatani_acf_google_map_api($api)
{
	$api_key = get_field('google_map_api_key', 'option');
	if ($api_key) {
		$api['key'] = $api_key;
	}
	return $api;
}
add_filter('acf/fields/google_map/api', 'nakatani_acf_google_map_api');
