// removed ready - gallery widget is not working otherwise.
// no need for it if you put all your JS before body closing tag
// $(document).on('ready', function () {
//   'use strict';

// Set revolution slider
jQuery('.tp-banner')
  .show()
  .revolution({
    // Set time and height width
    dottedOverlay: 'none',
    delay: 1000,
    startwidth: 1170,
    startheight: 700,
    hideThumbs: 200,
    thumbWidth: 100,
    thumbHeight: 50,
    thumbAmount: 5,
    // Set navigation arrow
    navigationType: 'bullet',
    navigationArrows: 'solo',
    navigationStyle: 'preview1',
    touchenabled: 'on',
    swipe_velocity: 0.7,
    swipe_min_touches: 1,
    swipe_max_touches: 1,
    drag_block_vertical: false,
    // Set parallax effect
    parallax: 'mouse',
    parallaxBgFreeze: 'on',
    parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
    keyboardNavigation: 'off',
    soloArrowLeftHalign: 'center',
    soloArrowLeftValign: 'bottom',
    soloArrowLeftHOffset: 20,
    soloArrowLeftVOffset: 0,
    soloArrowRightHalign: 'center',
    soloArrowRightValign: 'bottom',
    soloArrowRightHOffset: 20,
    soloArrowRightVOffset: 0,
    shadow: 0,
    fullWidth: 'off',
    fullScreen: 'on',
    spinner: 'spinner4',
    stopLoop: 'off',
    stopAfterLoops: -1,
    stopAtSlide: -1,
    shuffle: 'off',
    autoHeight: 'off',
    forceFullWidth: 'off',
    hideThumbsOnMobile: 'off',
    hideNavDelayOnMobile: 1500,
    hideBulletsOnMobile: 'off',
    hideArrowsOnMobile: 'off',
    hideThumbsUnderResolution: 0,
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    startWithSlide: 0,
    fullScreenOffsetContainer: '.header-part',
  });

// Initialize google map for truck locator page
var map;
var added_markers = [];
function initialize() {
  // Set google map property
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    styles: [
      {
        featureType: 'landscape',
        stylers: [
          { saturation: -100 },
          { lightness: 65 },
          { visibility: 'on' },
        ],
      },
      {
        featureType: 'poi',
        stylers: [
          { saturation: -100 },
          { lightness: 51 },
          { visibility: 'simplified' },
        ],
      },
      {
        featureType: 'road.highway',
        stylers: [{ saturation: -100 }, { visibility: 'simplified' }],
      },
      {
        featureType: 'road.arterial',
        stylers: [
          { saturation: -100 },
          { lightness: 30 },
          { visibility: 'on' },
        ],
      },
      {
        featureType: 'road.local',
        stylers: [
          { saturation: -100 },
          { lightness: 40 },
          { visibility: 'on' },
        ],
      },
      {
        featureType: 'transit',
        stylers: [{ saturation: -100 }, { visibility: 'simplified' }],
      },
      {
        featureType: 'administrative.province',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'water',
        elementType: 'labels',
        stylers: [
          { visibility: 'on' },
          { lightness: -25 },
          { saturation: -100 },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ hue: '#ffff00' }, { lightness: -25 }, { saturation: -97 }],
      },
    ],
  };
  // Display a map on the page
  map = new google.maps.Map(
    document.getElementById('truck-locator'),
    mapOptions
  );
  map.setTilt(45);
  // Multiple Markers
  var markers = [
    ['Kansas City', 37.88352498, -106.57836914],
    ['Oakland City', 42.26917949, -103.89770508],
    ['California City', 39.73253798, -96.03149414],
    ['San Francisco City', 38.00481997, -85.59448242],
    ['New York City', 36.58906837, -95.57006836],
    ['Arizona City', 43.01918507, -95.7019043],
    ['Los Angeles City', 41.68111756, -89.00024414],
    ['Miami City', 42.81958072, -78.87084961],
  ];
  // Info Window Content
  var infoWindowContent = [
    [
      '<div id="0"><img src="images/post-gallery1.jpg" width="200px"><h3><a href="javascript:;">Kansas City</a></h3><p>No 97, Hudd Park, San Francisco<br> Monday - Friday: 09:00 - 20:00 <br> Saturday: 09:00 - 18:00 <br> Sunday: closed</p></div>',
    ],
    [
      '<div id="1"><img src="images/post-gallery2.jpg" width="200px"><h3><a href="javascript:;">Oakland City</a></h3><p>No 97, Hudd Park, Oakland<br> Monday - Friday: 09:00 - 20:00 <br> Saturday: 09:00 - 18:00 <br> Sunday: closed</p></div>',
    ],
    [
      '<div id="2"><img src="images/post-gallery3.jpg" width="200px"><h3><a href="javascript:;">California City</a></h3><p>No 97, Hudd Park, California<br> Monday - Friday: 09:00 - 20:00 <br> Saturday: 09:00 - 18:00 <br> Sunday: closed</p></div>',
    ],
    [
      '<div id="3"><img src="images/post-gallery2.jpg" width="200px"><h3><a href="javascript:;">San Francisco</a></h3><p>No 97, Hudd Park, San Francisco<br> Monday - Friday: 09:00 - 20:00 <br> Saturday: 09:00 - 18:00 <br> Sunday: closed</p></div>',
    ],
    [
      '<div id="4"><img src="images/post-gallery1.jpg" width="200px"><h3><a href="javascript:;">New York City</a></h3><p>No 97, Hudd Park, New York<br> Monday - Friday: 09:00 - 20:00 <br> Saturday: 09:00 - 18:00 <br> Sunday: closed</p></div>',
    ],
    [
      '<div id="5"><img src="images/post-gallery2.jpg" width="200px"><h3><a href="javascript:;">Arizona City</a></h3><p>No 97, Hudd Park, Arizona<br> Monday - Friday: 09:00 - 20:00 <br> Saturday: 09:00 - 18:00 <br> Sunday: closed</p></div>',
    ],
    [
      '<div id="6"><img src="images/post-gallery3.jpg" width="200px"><h3><a href="javascript:;">Los Angeles</a></h3><p>No 97, Hudd Park, Los Angeles<br> Monday - Friday: 09:00 - 20:00 <br> Saturday: 09:00 - 18:00 <br> Sunday: closed</p></div>',
    ],
    [
      '<div id="7"><img src="images/post-gallery3.jpg" width="200px"><h3><a href="javascript:;">Miami City</a></h3><p>No 97, Hudd Park, Miami<br> Monday - Friday: 09:00 - 20:00 <br> Saturday: 09:00 - 18:00 <br> Sunday: closed</p></div>',
    ],
  ];
  // Display multiple markers on a map
  var infoWindow = new google.maps.InfoWindow(),
    marker,
    i;
  // Loop through our array of markers & place each one on the map
  var image = { url: 'images/truck-marker.png' };
  for (i = 0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
      position: position,
      icon: image,
      map: map,
      title: markers[i][0],
    });
    // Allow each marker to have an info window
    google.maps.event.addListener(
      marker,
      'click',
      (function (marker, i) {
        return function () {
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        };
      })(marker, i)
    );
    added_markers.push(marker);
    // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      map.setOptions({ draggable: false });
    }
  }
  // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
  var boundsListener = google.maps.event.addListener(
    map,
    'bounds_changed',
    function (event) {
      google.maps.event.removeListener(boundsListener);
    }
  );
}
// Onlice open pointer info window
$('.address-main a').on('click', function () {
  var marker_id = $(this).attr('href');
  var info_window = marker_id.replace('#', '');
  google.maps.event.trigger(added_markers[info_window], 'click');
  // Set animation
  $('body, html').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top - 100,
    },
    500
  );
});
// Set map height as per window height
if ($('.truck-locator').length > 0) {
  $('#truck-locator').height($(window).height());
} else {
  $('#truck-locator').height('600px');
}
// Check the google map element is available or not
if (document.getElementById('truck-locator') != null) {
  google.maps.event.addDomListener(window, 'load', initialize);
}
// Page Bottom To Top Call
$('.top-arrow').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 600);
  return false;
});
// Set gallery widget
$('.gallery-outer .gallery-item a').on('click', function () {
  var this_src = $(this).find('img').attr('src');
  var right_src = $('.gallery-block-right img').attr('src', this_src);
  $('.gallery-block-right a').attr('href', this_src);
});
// Send mail to company
$('.alert-container').hide();
$("form[name='contact-form']").on('submit', function (e) {
  e.preventDefault();
  var url = 'functions.php'; // the script where you handle the form input.
  var thisForm = $(this);
  var btnValue = $(this).find('.send_message').attr('value');
  $(this).find('.send_message').attr('value', 'SUBMITTING...');
  $(this).find('.send_message').attr('disabled', 'disabled');
  $.ajax({
    type: 'POST',
    url: url,
    data: thisForm.serialize(), // serializes the form's elements.
    success: function (data) {
      // show response from the php script.
      $('.alert-container').html(data);
      $('.alert-container').show();
      thisForm.trigger('reset');
      thisForm.find('.send_message').attr('value', btnValue);
      thisForm.find('.send_message').removeAttr('disabled');

      $('.alert .close').on('click', function () {
        $('.alert-container').hide();
      });
    },
  });

  return false; // avoid to execute the actual submit of the form.
});
// });

$(window).on('load', function () {
  'use strict';

  $('#pre-loader').delay(1000).fadeOut();

  setTimeout(function () {
    // Vertically center part
    var parentHeight = $('.bread-crumb-container').height();
    var childHeight = $('.bread-crumb-content').height();
    $('.bread-crumb-content').css(
      'margin-top',
      (parentHeight - childHeight) / 2
    );

    // Set outer height
    var shedule_left = $('.shedule-left').outerHeight();
    var shedule_right = $('.shedule-right').outerHeight();
    var shedule_ans = shedule_left - shedule_right / 2;
    $('.shedule-left').css('margin-top', shedule_ans / 2);

    // Equal Height call js
    equalheight('.dishes-container .dishes-list');

    // Pretty Photo Light box call Here
    $("area[rel^='prettyPhoto']").prettyPhoto();
    $(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({
      animation_speed: 'normal',
      slideshow: 3000,
      autoplay_slideshow: false,
      deeplinking: false,
      allow_resize: true,
      social_tools: false,
    });
    $(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({
      animation_speed: 'fast',
      slideshow: 10000,
      hideflash: true,
      deeplinking: false,
      allow_resize: true,
      social_tools: false,
    });

    // used new swiper
    // Swiper Slider call here
    // var swiper = new Swiper('.swiper-container', {
    //   pagination: '.swiper-pagination',
    //   paginationClickable: true,
    //   autoplay: 2500,
    //   autoplayDisableOnInteraction: false,
    // });

    // Mobile menu call here
    $('nav#menu').mmenu({
      offCanvas: {
        position: 'right',
      },
    });

    // Isotop Jquery Plugin JS call
    var $container = $('.portfolioContainer');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      },
    });

    // Set portfolio filter
    $('.portfolioFilter a').on('click', function () {
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      });
      return false;
    });
  }, 500);

  // Initiat WOW JS
  new WOW().init();
});

// Resize the window
$(window).on('resize', function () {
  'use strict';
  // Vertically center part
  var parentHeight = $('.bread-crumb-container').height();
  var childHeight = $('.bread-crumb-content').height();
  $('.bread-crumb-content').css('margin-top', (parentHeight - childHeight) / 2);
});

// Scroll arrow
$(window).on('scroll', function () {
  'use strict';
  if ($(this).scrollTop() > 500) {
    $('.top-arrow').fadeIn();
  } else {
    $('.top-arrow').fadeOut();
  }
});

// Equal height div for dynamic generated by js
equalheight = function (container) {
  'use strict';
  // Define the variable
  var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
  $(container).each(function () {
    $el = $(this);
    $($el).height('auto');
    var topPostion = $el.position().top;
    // Check postion is top or not
    var currentDiv;
    if (currentRowStart != topPostion) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest =
        currentTallest < $el.height() ? $el.height() : currentTallest;
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
};

var els = document.querySelectorAll('.imageplace');

for (var i=0;i<els.length;i++){
  els[i].parentElement.addEventListener('click',changeGallery)
}


function changeGallery(e){
  var num = e.currentTarget.querySelector('.imageplace').classList[1].slice(1);
  document.querySelector('#active-gallery-link').href = 'images/gallery/'+num+'.jpg';
  document.querySelector('#active-gallery-img').src = 'images/gallery/'+num+'.jpg';
}