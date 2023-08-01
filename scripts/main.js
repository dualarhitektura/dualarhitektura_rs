function initMap() {
  var uluru = {lat: 45.256384, lng: 19.827255};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: uluru,
    mapTypeId: 'terrain',
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ]
  });

  var image = {
    url: '../images/logo/logo-white-small.png', // url
    scaledSize: new google.maps.Size(42.27, 20), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image,
  });


}

$('body').scroll(function() {
  var imagePos = $(window).scrollTop();

  if (imagePos > 160) {
    $('.logo-nav').addClass('fixed');
    $('.region--header').addClass('fixed');
  }
  else {
    $('.logo-nav').removeClass('fixed');
    $('.region--header').removeClass('fixed');
  }
});


$(document).ready(function(){

//  console.log("blz");

  var $navToggle = $('.nav__toggle');
  var $regionNav = $('#navigation-region');
  var $m = $('.nav__menu');

  $('a').smoothScroll();


  // Mobile-menu toggle.
  $navToggle.on('click',function(){

    $regionNav.toggleClass('expanded');
    $('.nav').toggleClass('expanded');
    $m.toggleClass('menu-active');
    $(this).toggleClass('is-active');

    if (!$m.hasClass('is-active')) {
      $m.addClass('is-active')
    } else {
      if (!$m.hasClass('menu-active')) {
        $m.removeClass('is-active');
      }
    }
  });

  $('nav.nav__menu > a').on('click',function() {
    closeMenu();
    $m.removeClass('is-active');
  });


  function closeMenu() {
    $m.removeClass('menu-active');
    $navToggle.removeClass('is-active');
    $('.nav').removeClass('expanded');
    $regionNav.removeClass('expanded');
  }


  mediumZoom('.zoom-image', {
    margin: 24,
    background: '#ffffff',
    scrollOffset: 40
  })


  $('.grid').masonry({
      // initLayout: true,
      itemSelector: '.grid-item',
      gutter: 40,
      columnWidth: '.grid-sizer',
      percentPosition: true,
      resize: true,
      isAnimated: true,
      isFitWidth: true
  });


      //Language swither

     // By default
     if($("html:lang(en)").length){
      $('.en_lang').addClass("active-lang");
     $('#lang-switch .en').addClass("active-flag");
    }else {
      $('.rs_lang').addClass("active-lang"); 
      $('#lang-switch .rs').addClass("active-flag");
    }
 
     
     // Function switch
     $(function() {
       // Serbian button
       $("#lang-switch .rs").click(function() {
         // Enable Serbian
         $('.rs_lang').addClass("active-lang"); 
         
         // Disable English
         $('.en_lang').removeClass("active-lang") 
         
         // Active or remove the opacity on the flags.
         $('#lang-switch .rs').addClass("active-flag");
         $('#lang-switch .en').removeClass("active-flag");
       });
       
       // English button
       $("#lang-switch .en").click(function() {
         
         // Enable English
         $('.en_lang').addClass("active-lang");
         
         // Disable Serbian
         $('.rs_lang').removeClass("active-lang")
         
         // Active or remove the opacity on the flags.
         $('#lang-switch .en').addClass("active-flag");
         $('#lang-switch .rs').removeClass("active-flag");
       });
     });
 
});
  $( window ).on('load', function() {
    $('.grid').masonry({
      // initLayout: true,
      itemSelector: '.grid-item',
      gutter: 40,
      columnWidth: '.grid-sizer',
      percentPosition: true,
      resize: true,
        isAnimated: true,
    isFitWidth: true
    });
  });

  $( window ).resize(function() {
    $('.grid').masonry({
      // initLayout: true,
      itemSelector: '.grid-item',
      gutter: 40,
      columnWidth: '.grid-sizer',
      percentPosition: true,
      resize: true,
        isAnimated: true,
    isFitWidth: true
    });
  });
