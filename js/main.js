const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 300,
  slidesPerView: 3,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: { // 画面幅600px以上で適用
      slidesPerView: 2,
    },
      1025: { // 画面幅1025px以上で適用
      slidesPerView: 3,
      spaceBetween: 32,
    }
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});