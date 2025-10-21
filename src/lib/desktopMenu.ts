/**
 * Initializes the interactive behavior for the desktop navigation menu.
 * This includes:
 * - Hiding dropdowns when clicking outside of them.
 * - Toggling dropdown visibility when their respective trigger buttons are clicked.
 */
export function initializeDesktopMenu() {
  document.addEventListener("click", (e) => {
    const dropdowns = document.querySelectorAll(".group > div");
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e?.target as Node)) {
        dropdown.classList.add("hidden");
      }
    });
  });

  // Обработчики для мобильной навигации
  document
    .querySelectorAll('button[aria-haspopup="true"]')
    .forEach((button) => {
      button.addEventListener("click", () => {
        const dropdown = button.nextElementSibling;
        dropdown?.classList.toggle("hidden");
      });
    });
}
