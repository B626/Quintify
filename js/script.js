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
      content.style.height = `${totalHeight + 40}px`;
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

const footerAccordionItems = document.querySelectorAll(".footer-bottom__column");
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
      content.style.paddingTop = "1.5rem";
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

// const wrapper = document.querySelector(".digital__img-list-anim");
// let items = Array.from(
//   wrapper.querySelectorAll(".digital__img-list-anim-item")
// );
// let offset = 0;
// let isAnimating = false; // Prevent overlapping cycles

// function moveItemsUp() {
//   if (isAnimating) return; // Prevent overlapping calls
//   isAnimating = true;

//   offset -= window.innerWidth > 992 ? 80 : 39.94; // Move items up by 70px
//   items.forEach((item, index) => {
//     item.style.transform = `translateY(${offset}px)`;
//   });

//   // Remove the first item after animation
//   setTimeout(() => {
  
//     // Wait for the fade-out animation to complete before removing the item
//     setTimeout(() => {
//       const firstItem = items[0];
//       firstItem.classList.add("removing");
//       items.shift(); // Remove the first item from the array
//       // alert(firstItem.innerHTML);
//       // firstItem.remove();
//       // items.forEach((item, index) => {
//       //   item.style.transform = `translateY(${offset}px)`;
//       //   addNewItem();
//       // });

//       // Add a new item to maintain the list length
//       addNewItem();

//       // Reset the `isAnimating` flag to allow the next cycle
//       isAnimating = false;
//     }, 500); // Match this timeout to the CSS transition duration
//   }, 500); // Match this timeout to the upward movement duration
// }

// function addNewItem() {
//   // Create a new item and append it to the end
//   const newItem = items[0].cloneNode(true); // Clone the first item as an example
//   newItem.classList.remove("removing");
//   newItem.style.transform = `translateY(${offset + 80 * items.length}px)`; // Position it correctly
//   wrapper.appendChild(newItem);

//   items.push(newItem); // Add the new item to the items array
// }

// // Set the interval for cycling items
// setInterval(moveItemsUp, 1000);

const wrapper = document.querySelector(".digital__img-list-anim");
let items = Array.from(
  wrapper.querySelectorAll(".digital__img-list-anim-item")
);
let offset = 0;
let isAnimating = false; // Prevent overlapping cycles

function moveItemsUp() {
  if (isAnimating) return; // Prevent overlapping calls
  isAnimating = true;

  offset -= window.innerWidth > 992 ? 80 : 39.94; // Move items up by 70px
  items.forEach((item, index) => {
    item.style.transform = `translateY(${offset}px)`;
  });

  // Remove the first item after animation
  setTimeout(() => {
    const firstItem = items[0];
    firstItem.classList.add("removing");

    // Wait for the fade-out animation to complete before removing the item
    setTimeout(() => {
      // firstItem.remove();
      items.shift(); // Remove the first item from the array

      // Add a new item to maintain the list length
      addNewItem();

      // Reset the `isAnimating` flag to allow the next cycle
      isAnimating = false;
    }, 1000); // Match this timeout to the CSS transition duration
  }, 1000); // Match this timeout to the upward movement duration
}

function addNewItem() {
  // Create a new item and append it to the end
  const newItem = items[0].cloneNode(true); // Clone the first item as an example
  newItem.classList.remove("removing");
  newItem.style.transform = `translateY(${offset + 80 * items.length}px)`; // Position it correctly
  wrapper.appendChild(newItem);

  items.push(newItem); // Add the new item to the items array
}

// Set the interval for cycling items
setInterval(moveItemsUp, 2000);
