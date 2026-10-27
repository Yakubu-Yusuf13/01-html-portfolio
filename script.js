const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#primary-navigation");
const nav = menuButton.closest("nav");

nav.classList.add("is-collapsible");
menuButton.hidden = false;
menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  nav.classList.toggle("is-open", !isExpanded);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});
