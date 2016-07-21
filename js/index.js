    // jQuery for page scrolling feature - requires jQuery Easing plugin

    $('#navbar  a').bind('click', function(event) {
      event.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
});

    $('nav').affix({
        offset: {
            top: 100
        }
})
