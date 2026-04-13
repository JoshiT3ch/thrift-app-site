document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("js-ready");

  const year = new Date().getFullYear();
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(year);
  });

  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    if (link.dataset.navLink === page) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  const menuButton = document.querySelector("[data-menu-toggle]");
  const siteMenu = document.querySelector("[data-site-menu]");

  if (!menuButton || !siteMenu) {
    return;
  }

  const closeMenu = () => {
    siteMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const isOpen = siteMenu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  };

  menuButton.addEventListener("click", toggleMenu);

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (window.innerWidth > 720) {
      return;
    }

    if (!(target instanceof Node)) {
      return;
    }

    if (!siteMenu.contains(target) && !menuButton.contains(target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });
});
