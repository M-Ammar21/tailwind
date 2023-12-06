//hamburger
const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");
// hamburger.addEventListener("click", function () {
//   console.log("object");
// });

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});

//fixed nav
window.onscroll = function () {
  const header = document.querySelector("header");
  const logo = document.querySelector("#logo");
  const top = header.offsetTop;

  window.pageYOffset > top
    ? (header.classList.add("navbar-fixed"), logo.classList.add("logo-blur"))
    : (header.classList.remove("navbar-fixed"),
      logo.classList.remove("logo-blur"));
};
