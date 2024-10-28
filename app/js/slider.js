let swiper = new Swiper(".stories-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
  }
});

let feedbackSlider = new Swiper(".feedback-swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    827: {
      slidesPerView: 2,
    },
    1320: {
      slidesPerView: 3,
    },
    1350: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  }
});
