// firstly i find every section with class ".anim-section" and then i find every item with class ".anim-from-bottom" in each section

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function animateSectionsWithStagger(sectionClass, itemClass) {
    const sections = document.querySelectorAll(sectionClass);

    sections.forEach((section) => {
      const items = section.querySelectorAll(itemClass);

      if (items.length > 0) {
        gsap.from(items, {
          opacity: 0,
          y: 100,
          duration: 0.5,
          ease: "power1.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }
    });
  }

  animateSectionsWithStagger(".anim-section", ".anim-from-bottom");
});