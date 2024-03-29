
/* The function below will determine the height of the individual skoops and pass the info to masonry, 
so that the skoop containers are the proper height. It's a known issue with masonry/jquery*/
/*
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
*/

/*When user resizes the browser window, force a reshuffle of the skoops */
/*
$(window).resize(function() {
    $('#skoop-grid-container').masonry('reload');
});
*/

var add_hover_clear = true;

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
function doRollOver(el)
{
      var pid = el.parent().parent().attr("id");
      
      var position = el.parent().position(); 

      // make the position the same as parent
      $('div#'+pid+'>div.skoop-controller').css('height', '205px');
      $('div#'+pid+'>div.skoop-controller').css('width', '205px');
      $('div#'+pid+'>div.skoop-controller').css('top',position.top + 10);
      $('div#'+pid+'>div.skoop-controller').css('left',position.left + 10);
      
      var ih = el.outerHeight()+ 3;
      $('div#'+pid+'>div.skoop-controller').height(ih);
      $('div#' + pid + '>div.skoop-controller').fadeIn('normal', function() {
        // Animation complete.
      });
    
    // For some reason (mostly likely because they aren't
    // rendred yet, we can seem to add the hover hide
    // function event handlers until here...so do it once
    if(add_hover_clear)
    {
        add_hover_clear = false;
        
        $(".skoop-controller").mouseleave(function() {
              $('.skoop-controller').hide(0, function() {
            // Animation complete.
          });
          
        });
    }
}

function handleDiscount(input)
{
alert(input);
    if(input!=null)
    {
        return input;
    }
    else
    {
        return "35%";
    }
}

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
