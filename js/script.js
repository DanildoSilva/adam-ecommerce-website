const menu = document.querySelector('.menu').addEventListener("click", function(){
  const navMenu = document.querySelector('.page-links');
  const regBtn = document.querySelector('.register');
  const logBtn = document.querySelector('.login');
  const sepLine = document.querySelector('.sep-line');

  navMenu.classList.toggle("toggle-menu");
  regBtn.classList.toggle("hidden");
  logBtn.classList.toggle("hidden");
  sepLine.classList.toggle("hidden");
});

function openSearch() {
  const searchBox = document.querySelector('.search-box');

  searchBox.classList.toggle("search-on");
};

function openMenu() {
  const shopLinks = document.querySelector('.shop-links');

  shopLinks.classList.toggle("shop-links-on");
};
function closeMenu() {
  const shopLinks = document.querySelector('.shop-links');

  shopLinks.classList.toggle("shop-links-on");
};