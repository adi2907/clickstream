/**
 * Event capture script - Add this to your functions.php file
 */

function event_register_scripts() {

	$theme_version = wp_get_theme()->get( 'Version' );

	wp_enqueue_script( 'event-js', get_template_directory_uri() . '/assets/js/event_capture.js', [], $theme_version, true );
	wp_script_add_data( 'event-js', 'async', true );
	wp_localize_script( 'event-js', 'user_var', array('current_user' => wp_get_current_user()));

}