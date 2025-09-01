// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");
  nav.classList.toggle("shadow", window.scrollY > 50);
});

// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});