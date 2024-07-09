const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");

// const key = document.querySelector("#key");
// const tooltip = document.querySelector(".tokenomics__tooltip");

// открыть/закрыть меню
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menuBtn.classList.toggle("close");
  document.body.classList.toggle("scroll-off");
});

// закрытие меню при нажатии на ссылку
// document.querySelectorAll(".menu__link").forEach((link) =>
//   link.addEventListener("click", () => {
//     menu.classList.remove("visible");
//     menuBtn.classList.remove("close");
//     document.body.classList.remove("scroll-off");
//   })
// );

// копирование кода в буфер обмена
// document.querySelector("#key-copy").addEventListener("click", () => {
//   navigator.clipboard.writeText(key.getAttribute("data-key"));
//   tooltip.classList.add("visible");
//   setTimeout(() => tooltip.classList.remove("visible"), 400);
// });
