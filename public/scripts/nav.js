window.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  // Animate nav slide down on load
  nav.classList.remove("-translate-y-full");
  nav.classList.add("translate-y-0");

  // Toggle mobile menu
  let isOpen = false;
  menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      menu.classList.remove("hidden");
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
      requestAnimationFrame(() => {
        menu.classList.remove("opacity-0", "max-h-0");
        menu.classList.add("opacity-100", "max-h-screen");
      });
    } else {
      menu.classList.remove("opacity-100", "max-h-screen");
      menu.classList.add("opacity-0", "max-h-0");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      menu.addEventListener(
        "transitionend",
        () => menu.classList.add("hidden"),
        { once: true }
      );
    }
  });
});
