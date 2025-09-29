const menuBtn = document.querySelector(".menu-Btn");
const menuNav = document.querySelector(".menu-nav");

menuBtn.addEventListener("click", () => {
    menuNav.classList.toggle("open");
});