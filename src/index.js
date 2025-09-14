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

// scroll up
const scroppUp = () => {
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  if (scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-10");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-10");
  }
};
window.addEventListener("scroll", scroppUp);

// active link
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav_link");
  let current = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.href.includes(current)) {
      link.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);

// Change header
const scrollHeader = () => {
  const navBar = document.getElementById("navBar");

  if (scrollY >= 50) {
    navBar.classList.add("bgHeader");
  } else {
    navBar.classList.remove("bgHeader");
  }
};

window.addEventListener("scroll", scrollHeader);
