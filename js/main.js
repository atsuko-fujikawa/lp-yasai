const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  centeredSlides: true,
  loop: true,
  speed: 300,
  slidesPerView: 1.6,
  spaceBetween: 25,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
