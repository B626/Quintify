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

gsap.from(".anim-from-bottom-service-growth", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".growth",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-upscale-service-growth-app", {
  y: 50,
  opacity: 0,
  scale: 0.8,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".growth",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-from-bottom-service-build", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".build",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-from-bottom-service-purpose", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".purpose",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-from-bottom-service-ai", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".ai",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-from-bottom-marketing-hero", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".marketing",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-from-bottom-marketing-questions", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".questions",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

gsap.from(".anim-from-bottom-hubspot-power", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".power",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

// split-text

const heroTitleSplit = new SplitType(".hero__title-row", { types: "lines" });

// console.log(heroTitleSplit.chars)

gsap.from(heroTitleSplit.lines, {
  y: 100,
  opacity: 1,
  stagger: 0.4,
  duration: 0.7,
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