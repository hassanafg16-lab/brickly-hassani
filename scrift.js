const btn = document.getElementById("toggleBtn");
const nav = document.getElementById("navLinks");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});