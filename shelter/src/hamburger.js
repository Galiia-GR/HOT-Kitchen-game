export function funcHamburger() {
  const icon = document.querySelector(".hamburger");
  const navMemu = document.querySelector(".header__navigation");
  const body = document.querySelector("body");
  const navMenuLinks = document.querySelectorAll(".navigation__link");

  icon.addEventListener("click", () => {
    icon.classList.toggle("active-icon");
    navMemu.classList.toggle("header__navigation_active");
    body.classList.toggle("modal-open");
  });

  if (window.innerWidth <= 767) {
    for (let i = 0; i < navMenuLinks.length; i++) {
      navMenuLinks[i].addEventListener("click", () => {
        navMemu.classList.toggle("header__navigation_active");
        body.classList.toggle("modal-open");
        icon.classList.toggle("active-icon");
      });
    }
  }
}
