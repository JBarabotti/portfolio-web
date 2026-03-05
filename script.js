// Animation pour que la navbar devienne plus petite
window.addEventListener("scroll", function() {
  const nav = document.getElementById("header");

  if (window.scrollY > 50) {
    nav.classList.add("small");
  } else {
    nav.classList.remove("small");
  }
});

// Changement de langue
const langBtn = document.getElementById("lang-btn");
  let currentLang = "en"; // langue par défaut

  langBtn.addEventListener("click", () => {
    // bascule langue
    currentLang = currentLang === "en" ? "fr" : "en";

    // change le texte du bouton
    langBtn.textContent = currentLang === "en" ? "Français" : "English";
    // mettre à jour les placeholders
    document.querySelectorAll("input[data-placeholder-en], textarea[data-placeholder-en]").forEach(el => {
      el.placeholder = currentLang === "en" ? el.dataset.placeholderEn : el.dataset.placeholderFr;
    });
    // mettre à jour tous les textes visibles
    document.querySelectorAll("[data-lang-en]").forEach(el => {
      if(el.tagName === "INPUT" || el.tagName === "TEXTAREA"){
        // update placeholder pour les inputs/textarea
        el.placeholder = currentLang === "en" ? el.dataset.placeholderEn : el.dataset.placeholderFr;
      } else {
        // update texte normal pour h1, p, button, etc.
        el.textContent = currentLang === "en" ? el.dataset.langEn : el.dataset.langFr;
      }
    });
  });



