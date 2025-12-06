// Keep footer year updated
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");

  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav--open");
      toggle.classList.toggle("nav-toggle--active", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close nav when clicking a link (nice UX)
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav--open");
        toggle.classList.remove("nav-toggle--active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});

