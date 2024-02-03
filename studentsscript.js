const scroll = new LocomotiveScroll({
  el: document.querySelector('.content'),
  smooth: true,
});
const swiper = new Swiper('.swiper', {
    // Optional parameters
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
        clickable: true,
    },
    effect: 'slide',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    grabCursor: true,
    intialSlide: 1,
    watchSlidesProgress: true,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  });