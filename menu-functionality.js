"use strict";

const d = document;
const menu_btn = d.querySelector(".ham-btn");
const ham_icon = d.querySelector(".icon-ham");
const menu = d.querySelector(".nav-menu");

menu_btn.addEventListener("click", () => {
  ham_icon.classList.toggle("active");
  menu.classList.toggle("show");
});
