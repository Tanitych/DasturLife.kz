$(document).ready(function () {
    $('.header__burger, .menu__link').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
});


/*Slider__1*/

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,
        rows: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});