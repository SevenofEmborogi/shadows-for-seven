const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  document.body.style.setProperty("--scroll", y);
});

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
