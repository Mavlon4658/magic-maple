let use_slider = new Swiper('.ease_use__slider .swiper', {
    slidesPerView: 3.5,
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.6
    },
    spaceBetween: -60,
    navigation: {
        nextEl: '.ease_use__slider_next',
        prevEl: '.ease_use__slider_prev'
    }
})