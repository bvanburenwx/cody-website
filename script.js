// Simple script to keep the footer year updated
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// Later you could wire this form up to a real backend or service like Netlify Forms, Formspree, etc.
