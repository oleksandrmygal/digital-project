var slider = $('.works__slider').slick({
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    slide: '.works__slider-body',
    prevArrow: ('.works__arrow--right'),
    nextArrow: ('.works__arrow--left'),

    responsive: [{
            breakpoint: 1200,
            settings: {
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
            }
        }
    ]

});

var sliderTriple = $('.our-team__slider').slick({
    arrows: true,
    slide: '.our-team__card',
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: ('.our-team__arrow--right'),
    nextArrow: ('.our-team__arrow--left'),
    // variableWidth: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }
    ]
});

(function ($) {

    var header = $(".header__navigation"),
        scrollTop;

    window.addEventListener('scroll', fixHeader);

    function fixHeader() {
        scrollTop = window.pageYOffset;

        if (scrollTop >= 300) {
            header.addClass('stick');
        } else {
            header.removeClass('stick');
        }
    }

    fixHeader();
})(jQuery);

$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});

$('.nav,.scroll').on('click', 'a', function () {
    event.preventDefault();
    var topOfset;
    if (window.outerWidth < 992) {
        $("#navToggle").click();
        topOfset = 100.39;
    } else {
        topOfset = 127;
        // $("#navToggle").click();
    }
    var ID = $(this).attr('href');
    // получаем смещение елемента с id якоря
    var offset = $(ID).offset().top - topOfset;
    $('html,body').stop().animate({
        scrollTop: offset
    }, 1500, 'swing', function () {
        // alert("Finished animating");
    });
});

var l = $("input"),
    t = $("textarea");
l.focus(function () {
    $(this).siblings("label").addClass("focused")
}), l.blur(function () {
    "" == $(this).val() ? $(this).siblings("label").removeClass("focused") : $(this).siblings("label").addClass("focused")
}), t.focus(function () {
    $(this).siblings("label").addClass("focused")
}), t.blur(function () {
    "" == $(this).val() ? $(this).siblings("label").removeClass("focused") : $(this).siblings("label").addClass("focused")
});