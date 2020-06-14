$(window).load(function() {
    $('.loader').fadeOut();
});

$(document).ready(function() {

    $(window).resize(function() {
        $('#home, #about, #services, #skills, #portfolio, #footer').height($(window).height()); // Set the height of the window to the .home
    });

    $(window).trigger('resize');

    $(window).scroll(function() {
        var $scrollTop = $(window).scrollTop(),
            $windowHeight = $(window).height();

        if ($scrollTop > 0) {
            $("nav").addClass("fixed");
        } else {
            $("nav").removeClass("fixed");
        }
    });

    $('.js-scrollTo').on('click', function() {
        var page = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, 600);
        return false;
    });

    (function($) {
        "use strict";

        $(".bar").each(function() {
            var $bar = $(this),
                $pct = $bar.find(".pct"),
                data = $bar.data("bar");
            setTimeout(function() {
                $bar
                    .css("background-color", data.color)
                    .animate({
                        "width": $pct.html()
                    }, data.speed || 2000, function() {
                        $pct.css({
                            "color": data.color,
                            "opacity": 1
                        });
                    });
            }, data.delay || 0);
        });
    })(jQuery);

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 1.5,
        loop: true,
        keyboard: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var top1 = $('#home').offset().top;
    var top2 = $('#about').offset().top;
    var top3 = $('#services').offset().top;
    var top4 = $('#skills').offset().top;
    var top5 = $('#portfolio').offset().top;
    var top6 = $('#footer').offset().top;

    $(document).scroll(function() {
        var scrollPos = $(document).scrollTop();
        $('.nav__home a, .nav__about a, .nav__services a, .nav__skills a, .nav__portfolio a').removeClass('current');
        if (scrollPos >= top1 && scrollPos < top2) {
            $('.nav__home a').addClass('current');
        } else if (scrollPos >= top2 && scrollPos < top3) {
            $('.nav__about a').addClass('current');
        } else if (scrollPos >= top3 && scrollPos < top4) {
            $('.nav__services a').addClass('current');
        } else if (scrollPos >= top4 && scrollPos < top5) {
            $('.nav__skills a').addClass('current');
        } else if (scrollPos >= top5 && scrollPos < top6) {
            $('.nav__portfolio a').addClass('current');
        }
    });

});