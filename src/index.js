const clseBtn = document.getElementById("close");
const menu = document.getElementById("menu");
const mobileBtn = document.getElementById("mobile");

mobileBtn.addEventListener("click", () => {
  menu.classList.toggle("left-0");
});
clseBtn.addEventListener("click", () => {
  menu.classList.toggle("left-0");
});

document.querySelectorAll(".nav_link").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("left-0");
  });
});

// swipper js file
var swiper = new Swiper(".dev-review", {
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".reviews", {
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
