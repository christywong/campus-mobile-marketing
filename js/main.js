$(document).ready(function() {

	/* Default hover */
	$('#weather').addClass('active');
	$('#weather-img').show();
	$('#shuttles-img, #dining-img, #events-img, #links-img, #news-img, #map-img').hide();

	/* Changes background of the feature hovered over and displays corresponding screenshot */
	function changeBGColor(e) {
		$(this).css('background-color', 'rgba(22, 41, 74, 0.8)');
		$(this).css('cursor', 'pointer');
		$('#info .active').removeClass('active');
		$(this).addClass('active');
		$('#screens').children('img').hide();
		$('#' + this.id + '-img').show();
	}

	/* Changes background color back if hovering over something else */
	function revertBGColor(e) {
		$(this).css('background-color', '');
	}

	$(document).on({mouseenter: changeBGColor, mouseleave: revertBGColor}, '.features');

});