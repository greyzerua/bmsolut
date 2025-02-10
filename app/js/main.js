import "./countdown-timer.js";
import { onLoad as onGalleryLoad } from "./gallery.js";

let loader = document.getElementById("preloader");
let body = document.querySelector("body");

  document.addEventListener("DOMContentLoaded", function () {
  let img = document.querySelector(".main__img.desktop-photo");

  if (img.complete) {
    hideLoader();
  } else {
    img.addEventListener("load", hideLoader);
    img.addEventListener("error", hideLoader);
  }
});

function hideLoader() {
  loader.style.display = "none";
  body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function () {
  onGalleryLoad();
});

const hideDropdown = (dropdown) => {
  const content = dropdown.querySelector(".dropdown-content");
  setTimeout(() => {
    content.style.maxHeight = null;
  }, 4);
  dropdown.classList.remove("active");
}

const els = document.querySelectorAll(".dropdown-header, .dropdown-button");


els.forEach((header) => {
  header.addEventListener("click", function () {
    const allDropDowns = document.querySelectorAll(".dropdown-outer");
    
    const dropdown = this.closest(".dropdown-outer");
    const content = dropdown.querySelector(".dropdown-content");

    if (dropdown.classList.contains("active")) {
      hideDropdown(dropdown);
    } else {
      
      allDropDowns.forEach(el => {
        if (el.classList.contains('active')) {
          hideDropdown(el);
        }
      });
      content.style.maxHeight = content.scrollHeight + "px";
      dropdown.classList.add("active");
    }
  });
});

document.querySelectorAll('.swiper-slide').forEach(slide => {
  slide.addEventListener('click', function () {
    let videoUrl = this.getAttribute('data-video') + "?autoplay=1";
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', videoUrl);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    this.innerHTML = '';
    this.appendChild(iframe);
  });
});