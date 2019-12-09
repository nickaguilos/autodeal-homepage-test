$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        items:1,
        loop:true,
        autoplay: true,
        animateOut: 'fadeOut',
        dots: true,
        mouseDrag: false,
        nav: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });

    $(".owl-item").each(function(){
        var el = $(this).find('img').attr('src');
        // console.log(el);
        $(this).find('img').hide();
        $(this).css({"background-image": "url("+el+")"})
    });

    // $('#demo').betterScroll();
});