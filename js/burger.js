document.addEventListener("DOMContentLoaded", function () {
  const burgerMenuButton = document.querySelector(".header__burger-menu-btn");
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerMenuLinks = document.querySelectorAll(".burger-menu__link");

  // Open the menu

  burgerMenuButton.addEventListener("click", function (e) {
    e.preventDefault();
    const closeBtn = document.querySelector(".close-btn");
    gsap.to(burgerMenu, {
      right: 0,
      duration: 0.1,
      onStart: function () {
        document.body.style.overflow = "hidden";
      },
    });
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      gsap.to(burgerMenu, {
        right: "-70vw",
        duration: 0.1,
        onStart: function () {
          document.body.style.overflow = "visible";
        },
      });
    });
  });

  // Close the menu when clicking outside of it
  document.addEventListener("click", function (e) {
    if (
      !burgerMenu.contains(e.target) &&
      !burgerMenuButton.contains(e.target)
    ) {
      gsap.to(burgerMenu, {
        right: "-70vw",
        duration: 0.1,
        onComplete: function () {
          document.body.style.overflow = "visible";
        },
      });
    }
  });

  // Close the menu when any link inside the burger menu is clicked

  burgerMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      gsap.to(burgerMenu, {
        right: "-70vw",
        duration: 0.1,
        onComplete: function () {
          document.body.style.overflow = "visible";
        },
      });
    });
  });
});
