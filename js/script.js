// digital accordion

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-digital__item");
  const triggers = document.querySelectorAll(".accordion-digital__top-area");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const parentItem = this.closest(".accordion-digital__item");
      const content = parentItem.querySelector(".accordion-digital__content");
      const img = this.querySelector("img");

      console.log(img);

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
            otherImg.src =
              img.getAttribute("id") === "marketing-accordion-trigger-icon"
                ? "../assets/img/icons/plus.svg"
                : img.getAttribute("id") ===
                  "marketing-accordion-trigger-icon-questions"
                ? "../assets/img/icons/plus-gradient.svg"
                : "./assets/img/icons/plus.svg";
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
        img.src =
          img.getAttribute("id") === "marketing-accordion-trigger-icon"
            ? "../assets/img/icons/plus.svg"
            : img.getAttribute("id") ===
              "marketing-accordion-trigger-icon-questions"
            ? "../assets/img/icons/plus-gradient.svg"
            : "./assets/img/icons/plus.svg";
      } else {
        parentItem.classList.add("active");
        parentItem.classList.add("active-border");
        content.style.paddingTop = window.innerWidth > 992 ? "2rem" : "0.5rem";
        const totalHeight =
          content.scrollHeight + parseInt(getComputedStyle(content).paddingTop);
        content.style.height = "4.25rem";
        content.style.opacity = "1";
        img.src =
          img.getAttribute("id") === "marketing-accordion-trigger-icon"
            ? "../assets/img/icons/minus.svg"
            : img.getAttribute("id") ===
              "marketing-accordion-trigger-icon-questions"
            ? "../assets/img/icons/minus-gradient.svg"
            : "./assets/img/icons/minus.svg";
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
