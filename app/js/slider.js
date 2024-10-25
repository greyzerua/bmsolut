let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Функции для отключения и включения pointer-events на iframe
function disableIframePointerEvents() {
  document.querySelectorAll(".swiper-slide iframe").forEach((iframe) => {
    iframe.style.pointerEvents = "none";
  });
}

function enableIframePointerEvents() {
  document.querySelectorAll(".swiper-slide iframe").forEach((iframe) => {
    iframe.style.pointerEvents = "auto";
  });
}
// Отключаем pointer-events при начале свайпа
swiper.on("slideChangeTransitionStart", disableIframePointerEvents);
swiper.on("slideChangeTransitionEnd", enableIframePointerEvents);

// Отключаем pointer-events для мыши
document.querySelectorAll(".swiper-slide").forEach((slide) => {
  slide.addEventListener("mousedown", disableIframePointerEvents);
  slide.addEventListener("mouseup", enableIframePointerEvents);
});