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
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});
