jQuery(document).ready(function populate_geojson() { 
	var geojson = Drupal.settings.lsf_subscription.geojson;
	jQuery("#edit-field-area-geojson-und-0-geom").val(geojson);
    jQuery('#edit-field-area-geojson-und-0-geom').attr('readonly', 'true'); // mark it as read only
    jQuery('#edit-field-area-geojson-und-0-geom').css('background-color' , '#DEDEDE'); // change the background color	
});