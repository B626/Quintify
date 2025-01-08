var swiper = new Swiper(".customers__slider", {
  slidesPerView: window.innerWidth > 576 ? 2 : 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
