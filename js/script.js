console.log(2);
const hmbBtn = document.querySelector(".hmb");
const mobileNav = document.querySelector(".mobile-header");

hmbBtn.addEventListener("click", function() {
  mobileNav.classList.toggle("active");
  console.log(1);
});