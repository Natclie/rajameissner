import AOS from "aos";
AOS.init({ duration: 500 });

document.addEventListener('DOMContentLoaded', () => {
    const hoverLine = document.getElementById('hover-line');
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.getElementById('nav-menu');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            const { offsetLeft, offsetWidth } = e.target;
            hoverLine.style.width = `${offsetWidth}px`;
            hoverLine.style.transform = `translateX(${offsetLeft}px)`;
            hoverLine.style.opacity = '1';
        });
    });

    navMenu.addEventListener('mouseleave', () => {
        hoverLine.style.opacity = '0';
    });
});

const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("nav-menu-2");
const menuLinks = document.querySelectorAll("#nav-menu-2 a");

function openMenu() {
  mobileMenu.classList.remove("translate-x-full", "opacity-0", "invisible");
  mobileMenu.classList.add("translate-x-0", "opacity-100");
  menuToggle.classList.add("hidden");
  document.documentElement.style.overflowY = "hidden";

}

function closeMobileMenu() {
  mobileMenu.classList.remove("translate-x-0", "opacity-100");
  mobileMenu.classList.add("translate-x-full", "opacity-0", "invisible");
  menuToggle.classList.remove("hidden");
  document.documentElement.style.overflowY = "auto";
}

menuToggle.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMobileMenu);
menuLinks.forEach(link => link.addEventListener("click", closeMobileMenu));


// Eventos
menuToggle.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener("click", toggleMenu);
});