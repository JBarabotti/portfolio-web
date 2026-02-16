// Animation pour que la navbar devienne plus petite
window.addEventListener("scroll", function() {
  const nav = document.getElementById("header");

  if (window.scrollY > 50) {
    nav.classList.add("small");
  } else {
    nav.classList.remove("small");
  }
});