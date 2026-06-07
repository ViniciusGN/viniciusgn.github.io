const links = document.querySelectorAll(".nav-link");

const sections = [
  "about",
  "experience",
  "projects",
  "contact",
].map(id => document.getElementById(id));

function updateActive() {
  const scrollY = window.scrollY + 80;

  let current = "";

  sections.forEach(sec => {
    if (sec && sec.offsetTop <= scrollY) {
      current = sec.id;
    }
  });

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
}

window.addEventListener("scroll", updateActive, { passive: true });
updateActive();