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


// Animation de révélation au scroll
const reveals = document.querySelectorAll('.reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale');

function scrollReveal() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', scrollReveal);
scrollReveal();


// Empêche le scroll horizontal
document.body.addEventListener('scroll', () => {
    document.body.scrollLeft = 0;
});


// Sélection du burger et du nav
const burger = document.querySelector('#header .fa-bars');
const nav = document.querySelector('#header .nav');
const cv = document.querySelector('#header .cv');


// Au clic sur le burger
burger.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.add('hide');

        setTimeout(() => {
            nav.classList.remove('show', 'hide');
        }, 500);
    } else {
        nav.classList.add('show');
    }
});




// Tous ce qui n'est pas encore fonctionnel

// Thème sombre/clair ps: pas encore fonctionnel
document.querySelectorAll(".theme").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Cette fonctionnalité est en cours de développement, mais elle sera bientôt disponible ! Restez à l'écoute pour une expérience personnalisée.");
  });
});

// Alerte projet en cours
document.querySelectorAll(".dev").forEach(card => {
  card.addEventListener("click", () => {
    alert("Aucun projet n'est encore disponible, mais je travaille dessus ! N'hésitez pas à me contacter pour en savoir plus.");
  });
});

// Boutons sociaux pas encore fonctionnels
document.querySelectorAll(".socialx").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Cette fonctionnalité est en cours de développement, mais elle sera bientôt disponible ! Restez à l'écoute pour plus de mises à jour.");
  });
});

// Contact form pas encore fonctionnel
document.getElementById("submit")
.addEventListener("click", () => {
  alert("Le formulaire de contact est en cours de développement, mais vous pouvez toujours me contacter directement par email à jordan.barabotti170104@gmail.com");
});

