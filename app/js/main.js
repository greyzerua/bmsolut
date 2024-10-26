import "./countdown-timer.js";
import { onLoad as onGalleryLoad } from "./gallery.js";

let loader = document.getElementById("preloader");
let body = document.querySelector("body");

window.addEventListener("load", function () {
  loader.style.display = "none";
  body.style.overflow = "";
});

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

document.querySelectorAll(".dropdown-header").forEach((header) => {
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
