document.addEventListener("DOMContentLoaded", () => {
  // Typed.js Effect
  new Typed(".typed-text-output", {
    strings: [
      "Laravel Developer",
      "Full-Stack Enthusiast",
      "Problem Solver",
      "AI/ML Enthusiast",
      "Aspiring Software Engineer",
    ],
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 900,
    loop: true
  });

  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const menuOpenIcon = document.getElementById("menu-open");
  const menuCloseIcon = document.getElementById("menu-close");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menuOpenIcon.classList.toggle("hidden");
    menuCloseIcon.classList.toggle("hidden");
  });

  document.querySelectorAll("#menu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      menuOpenIcon.classList.remove("hidden");
      menuCloseIcon.classList.add("hidden");
    });
  });

  // Navbar Active Link on Scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80; // navbar offset
      if (scrollY >= sectionTop) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-secondary", "font-semibold");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-secondary", "font-semibold");
      }
    });
  });

  // Project Filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Toggle active button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      projectCards.forEach(card => {
        card.style.display =
          filter === "all" || card.classList.contains(filter) ? "block" : "none";
      });
    });
  });

  // Optional: Animate Skill Bars
  const skillFills = document.querySelectorAll(".skill-bar-fill");
  skillFills.forEach(fill => {
    const width = fill.dataset.width || "0%";
    fill.style.width = width;
  });
  //Year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();

});