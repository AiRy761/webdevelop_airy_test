console.log(2);
const hmbBtn = document.querySelector(".hmb");
const mobileNav = document.querySelector(".mobile-header");

hmbBtn.addEventListener("click", function() {
  mobileNav.classList.toggle("active");
  console.log(1);
});

const newsSwiper = new Swiper('.news-swiper', {
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  speed: 600,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
const mainSwiper = new Swiper('.main-swiper', {
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  speed: 600,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});