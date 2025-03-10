// digital accordion

const accordionItems = document.querySelectorAll(".accordion-digital__item");
const triggers = document.querySelectorAll(".accordion-digital__top-area");

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
        const otherContent = item.querySelector(".accordion-digital__content");
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
      content.style.height =
        window.innerWidth < 480
          ? `${totalHeight + 20}px`
          : `${totalHeight + 40}px`;
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

// footer accordion

const footerAccordionItems = document.querySelectorAll(
  ".footer-bottom__column"
);
const footerTriggers = document.querySelectorAll(".footer-bottom__top-area");

footerTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    const parentItem = this.closest(".footer-bottom__column");
    const content = parentItem.querySelector(".footer-bottom__content");
    const img = this.querySelector(".footer-bottom__accordion-btn img");

    // Toggle the clicked item
    if (parentItem.classList.contains("active")) {
      parentItem.classList.remove("active");
      content.style.height = "0";
      content.style.opacity = "0";
      content.style.paddingTop = "0";
      img.style.transform = "rotate(0deg)";
    } else {
      parentItem.classList.add("active");
      content.closest(".burger-menu__dropdown-link-wrapper") !== null 
      ? content.style.paddingTop = 0 
      : content.style.paddingTop = "1.5rem";
      const totalHeight =
        content.scrollHeight + parseInt(getComputedStyle(content).paddingTop);
      content.style.height = `${totalHeight + 30}px`;
      content.style.opacity = "1";
      img.style.transform = "rotate(180deg)";
    }
  });
});

// dropdown

document.addEventListener("DOMContentLoaded", function () {
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
    }, 400);
  });

  dropdownContent.addEventListener("mouseenter", function () {
    clearTimeout(timeout);
  });

  dropdownContent.addEventListener("mouseleave", function () {
    timeout = setTimeout(function () {
      dropdownContent.classList.remove("show");
    }, 400);
  });
});

// header bg change on scroll

const headerMain = document.querySelector(".header__main");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    headerMain.style.backgroundColor = "#020817";
    headerMain.style.borderBottom = "1px solid #ffffff20";
  } else {
    headerMain.style.backgroundColor = "transparent";
    headerMain.style.borderBottom = "transparent";
  }
});

// list items move up animation

const container = document.querySelector(".digital__img-list-anim");
const offset = 80; // Distance to move items up
const duration = 0.3; // Animation duration
const oddOffset = 20; // Distance to move odd items to the right

// Initial setup: Position each item vertically and calculate oddness
function initializeItems() {
  document.querySelectorAll(".digital__img-list-anim-item").forEach((item, index) => {
    const xOffset = index % 2 !== 0 ? oddOffset : 0; // Calculate horizontal offset for odd items
    gsap.set(item, { y: index * offset, x: xOffset }); // Set initial vertical and horizontal positions
  });
}
initializeItems();

function moveItems() {
  const items = document.querySelectorAll(".digital__img-list-anim-item");
  const firstItem = items[0]; // Always get the first item in the DOM
  const bottomPosition = (items.length - 1) * offset; // Position for the bottom item

  // Clone the first item before it moves out of view
  const clonedItem = firstItem.cloneNode(true);
  console.log(clonedItem)

  // Calculate oddness for the cloned item
  const clonedXOffset = items.length % 2 !== 0 ? oddOffset : 0;

  gsap.set(clonedItem, { y: bottomPosition + offset, x: clonedXOffset, opacity: 0 }); // Place the clone below the list
  container.appendChild(clonedItem); // Add the clone to the DOM

  // Animate all items together
  gsap.to(items, {
    y: `-=${offset}`, // Move all items up by 80px
    duration: duration,
    ease: "power1.inOut",
    onStart: () => {
      // Fade in the cloned item at the start of the animation
      gsap.to(clonedItem, {
        opacity: 1,
        duration: 0.3, // Smooth fade-in
        ease: "power1.out",
      });
    },
    onComplete: () => {
      // Remove the original first item after it moves out of view
      firstItem.remove();

      // Reset positions and reapply offsets for all items
      initializeItems(); // Reinitialize positions and offsets for next cycle
    },
  });
}

// Loop the animation every 3 seconds
setInterval(moveItems, 5000); // Interval time reduced
