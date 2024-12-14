// import gsap from "../assets/libs/gsap-core"
// import SplitText from "../assets/libs/SplitText"

// digital accordion

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-digital__item");
  const triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const parentItem = this.closest(".accordion-digital__item");
      const content = parentItem.querySelector(".accordion-digital__content");
      const img = this.querySelector("img");

      // Close all other items
      accordionItems.forEach((item) => {
        if (item !== parentItem) {
          item.classList.remove("active");
          item.classList.remove("active-border");
          const otherContent = item.querySelector(
            ".accordion-digital__content"
          );
          otherContent.style.height = "0";
          otherContent.style.opacity = "0";
          otherContent.style.paddingTop = "0";
          const otherImg = item.querySelector(".accordion-trigger img");
          if (otherImg) {
            otherImg.src = "./assets/img/icons/plus.svg";
          }
        }
      });

      // Toggle the clicked item
      if (parentItem.classList.contains("active")) {
        parentItem.classList.remove("active");
        parentItem.classList.remove("active-border");
        content.style.height = "0";
        content.style.opacity = "0";
        content.style.paddingTop = "0";
        img.src = "./assets/img/icons/plus.svg";
      } else {
        parentItem.classList.add("active");
        parentItem.classList.add("active-border");
        content.style.paddingTop = window.innerWidth > 992 ? "2rem" : "0.5rem";
        const totalHeight =
          content.scrollHeight + parseInt(getComputedStyle(content).paddingTop);
        content.style.height = "4.25rem";
        content.style.opacity = "1";
        img.src = "./assets/img/icons/minus.svg";
      }
    });
  });
});

// swiper

var swiper = new Swiper(".customers__slider", {
  slidesPerView: window.innerWidth > 576 ? 2 : 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// scroll down text animation

document.addEventListener("DOMContentLoaded", function () {
  if(window.innerWidth > 768) {
    gsap.to(".hero__scroll-right", {
      y: -60, // Move up by -60px
      duration: 1.2, // Duration of the animation
      yoyo: true, // Make the animation reverse
      repeat: -1, // Repeat indefinitely
      ease: "power1.inOut", // Easing function
    });
  }
});

// dropdown

document.addEventListener("DOMContentLoaded", function () {
  const dropdownLink = document.querySelector(".nav-header__link_dropdown");
  const dropdownContent = document.querySelector(
    ".nav-header__dropdown-content"
  );
  const dropdown = document.querySelector(".nav-header__dropdown");
  let timeout;

  dropdown.addEventListener("mouseenter", function () {
    clearTimeout(timeout);
    dropdownContent.classList.add("show");
  });

  dropdown.addEventListener("mouseleave", function () {
    timeout = setTimeout(function () {
      dropdownContent.classList.remove("show");
    }, 400); // Adjust the delay as needed
  });

  dropdownContent.addEventListener("mouseenter", function () {
    clearTimeout(timeout);
  });

  dropdownContent.addEventListener("mouseleave", function () {
    timeout = setTimeout(function () {
      dropdownContent.classList.remove("show");
    }, 400); // Adjust the delay as needed
  });
});


// business progress bar

// $(document).ready(function () {
//   $(".card-business__progress-area").each(function () {
//     var $bar = $(this).find(".card-business__bar");
//     var $val = $(this).find("span");
//     var perc = parseInt($val.text(), 10);

//     $({ p: 0 }).animate(
//       { p: perc },
//       {
//         duration: 3000,
//         easing: "swing",
//         step: function (p) {
//           $bar.css({
//             transform: "rotate(" + (45 + p * 1.8) + "deg)", // 100%=180° so: ° = % * 1.8
//             // 45 is to add the needed rotation to have the green borders at the bottom
//           });
//           $val.text(p | 0);
//         },
//       }
//     );
//   });
// });

// burger menu

const burgerMenuButton = document.querySelector(".header__burger-menu-btn");
const burgerMenu = document.querySelector(".burger-menu");
const burgerMenuLinks = document.querySelectorAll(".burger-menu__link");

burgerMenuButton.addEventListener("click", function (e) {
  e.preventDefault();
  gsap.to(burgerMenu, {
    right: 0,
    duration: 0.5,
    ease: "power3.out",
    onStart: function () {
      document.body.style.overflow = "hidden";
    },
  });
});

// Close the menu when clicking outside of it
document.addEventListener("click", function (e) {
  if (!burgerMenu.contains(e.target) && !burgerMenuButton.contains(e.target)) {
    gsap.to(burgerMenu, {
      right: "-70vw",
      duration: 0.5,
      ease: "power3.out",
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
      duration: 0.5,
      ease: "power3.out",
      onComplete: function () {
        document.body.style.overflow = "visible";
      },
    });
  });
});


// digital popping up animation

gsap.registerPlugin(ScrollTrigger);

gsap.from(".anim-from-bottom-home-hero", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-from-bottom-clients-hero", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".clients",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-from-bottom-home-accordion", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".digital",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-from-bottom-home-business", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".business",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-from-bottom-home-customers", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".customers",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-from-bottom-home-landscape", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".landscape",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-upscale-home-landscape-app", {
  y: 50,
  opacity: 0,
  scale: 0.8,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".landscape",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-from-bottom-home-footer-top", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer-top",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});
