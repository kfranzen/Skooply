
/* The function below will determine the height of the individual skoops and pass the info to masonry, 
so that the skoop containers are the proper height. It's a known issue with masonry/jquery*/

$('#skoop-grid-container').imagesLoaded( function( $images, $proper, $broken ) {
  // callback provides three arguments:
  // $images: the jQuery object with all images
  // $proper: the jQuery object with properly loaded images
  // $broken: the jQuery object with broken images
  // `this` is a jQuery object of container
  console.log( $images.length + ' images total have been loaded in ' + this );
  console.log( $proper.length + ' properly loaded images' );
  console.log( $broken.length + ' broken images' );
      $('#skoop-grid-container').masonry({
        itemSelector: '.skoop-container',
        isAnimated: true,
        isFitWidth: true,
        columnWidth: 10,
    });
});

/*When user resizes the browser window, force a reshuffle of the skoops */

$(window).resize(function() {
    $('#skoop-grid-container').masonry('reload');
});

/* Main navigation show/hide */

$('#location-sub-menu').hide();
$('#about-sub-menu').hide();
$('#browse-sub-menu').hide();


$('#browse').hover(function() {
  $('#browse-sub-menu').fadeToggle('fast', function() {
    // Animation complete.
  });
});

$('#about').hover(function() {
  $('#about-sub-menu').fadeToggle('fast', function() {
    // Animation complete.
  });
});

$('#location').hover(function() {
  $('#location-sub-menu').fadeToggle('fast', function() {
    // Animation complete.
  });
});

/* Show/Hide the controller to manipulate a skoop when the user hovers over a skoop image */ 
$("img.skoop-image").mouseenter(function() {

      var pid = $(this).parent().parent().attr("id");
      var ih = $(this).outerHeight()+ 3;
      $('div#'+pid+'>div.skoop-controller').height(ih);
      $('div#'+pid+'>div.skoop-controller').show(0, function() {
    // Animation complete.
    
  });
});


$(".skoop-controller").mouseleave(function() {
      $('.skoop-controller').hide(0, function() {
    // Animation complete.
  });
  
});

/* Show/Hide the bubble over the user thumbnails in the skoops*/

$(".user-thumb-50px").hover(function() {
      var uid = $(this).attr("data-userid");
      var pos = $(this).offset();
      $('#user-info-loupe').text(uid);
      $('#user-info-loupe').css({'left' : pos.left, 'top' : pos.top-210});
      $('#user-info-loupe').fadeToggle(0, function() {
    // Animation complete.
  });
});

/* Create the "Featured Skoop" slider window complete with pagination links*/

$(function(){
	$('#slides').slides({
		preload: true,
		generatePagination: true,
		hoverPause: true,
		play: 5000
	});
});
