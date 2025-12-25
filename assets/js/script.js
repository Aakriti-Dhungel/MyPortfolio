
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".typed-text-output", {
    strings: ["PHP/Laravel Developer", "Web Developer", "Aspiring Software Engineer", "AI/ML Enthusiast"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 900,
    loop: true
  });
});

// menu
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menuOpenIcon.classList.toggle('hidden');
  menuCloseIcon.classList.toggle('hidden');
});

// nav active
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust for navbar height
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("text-secondary", "font-semibold");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("text-secondary", "font-semibold");
    }
  });
});



// project filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach(card => {
      card.style.display = (filter === "all" || card.classList.contains(filter)) ? "block" : "none";
    });
  });
});

