// Futurial Theme. July 2015. @Sergio_Gordillo
'use strict';

(function() {

  window.addEventListener('load',function(){

    //Index video autoplay at load
    if($('.supervideo').get(0) !== undefined){
      $('.supervideo').get(0).play();
    }

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    /*$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('.mdl-layout__content').stop().animate({
            scrollTop: (($($anchor.attr('href')).offset().top - $('.mdl-layout__content').offset().top) - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });*/

    // Headroom js
    // grab an element
    var myElement = document.querySelector('#headroom-nav');
    // construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement, {
      scroller : document.querySelector('.mdl-layout__content')
    });
    // initialise
    headroom.init();

    // Headroom js
    // grab an element
    var myElementMobile = document.querySelector('.mdl-layout__drawer-button');
    // construct an instance of Headroom, passing the element
    var headroomMobile = new Headroom(myElementMobile, {
      scroller : document.querySelector('.mdl-layout__content'),
        classes : {
          pinned : 'headroom--pinned-mobile'
      }
    });
    // initialise
    headroomMobile.init();

    //SlickJS
    $('.presentation').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
          }
        }
      ]
    });


  });

})(); // End of use strict
