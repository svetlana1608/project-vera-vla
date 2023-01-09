"use strict";

const swiper = new Swiper('.reviews__slider', {
    spaceBetween: 30,
    slidesPerView: 6.5,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.reviews__scrollbar',
        draggable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3.5,
            spaceBetween: 20
        },
        1400: {
            slidesPerView: 4.5,
            spaceBetween: 30
        },
        1920: {
            slidesPerView: 6.5,
            spaceBetween: 30
        }
    }
});