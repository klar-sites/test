
  // Agency Theme JavaScript
  (function($) {
    "use strict"; // Start of use strict
    
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        if (!$anchor.attr('href')) return;
        if (!$anchor.attr('href').startsWith('#')) return;
        if (!$($anchor.attr('href')).length) return;
        $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
          // scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
    
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
      $('.navbar-toggle:visible').click();
    });
    
    // Offset for Main Navigation
    $('#main-nav').affix({
      offset: {
        top: 100
      }
    });
  })(jQuery);

window.addEventListener('load', function() { 
  // console.log('hehehehehehe');
  // console.log(window.top.document.cookie);
  $('#carousel-slider-1496036281989').carousel({
    interval: false,
    keyboard: false
  });
}, false);

window.addEventListener('load', function() { 
  // console.log('hehehehehehe');
  // console.log(window.top.document.cookie);
  $('#carousel-slider-1495994863089').carousel({
    interval: false,
    keyboard: false
  });
}, false);

window.addEventListener('load', function() { 
  // console.log('hehehehehehe');
  // console.log(window.top.document.cookie);
  $('#carousel-slider-1496036290441').carousel({
    interval: false,
    keyboard: false
  });
}, false);
