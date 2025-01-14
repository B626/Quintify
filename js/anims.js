document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");
  const wrapper = document.querySelector(".wrapper");

  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener("load", function () {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.1,
      onComplete: function () {
        loader.style.display = "none";
        wrapper.style.opacity = "1";
        gsap.fromTo(wrapper, { opacity: 0 }, { opacity: 1, duration: 0.5 });
      },
    });

    // bg blur

    gsap.to(".ai-blur", {
      opacity: 1,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".ai",
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(".power-customers .blur", {
      opacity: 1,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".power-customers",
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(".plan__blur", {
      opacity: 1,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".plan",
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // split-text animation

    if (window.innerWidth > 480) {
      const heroTitleSplit = new SplitType(".hero__title-row", {
        types: "lines",
      });
      gsap.from(heroTitleSplit.lines, {
        y: 100,
        opacity: 1,
        stagger: 0.4,
        duration: 0.7,
      });
    }

    // progress bars animation

    const progressBars = document.querySelectorAll(".progress-bar-fg");
    const progressTexts = document.querySelectorAll(
      ".card-business__stats-text-main"
    );

    progressBars.forEach((progressBar, index) => {
      const progressText = progressTexts[index];

      // Get the progress value and remove the "%" symbol
      const progressValue = parseInt(
        progressText.textContent.replace("%", ""),
        10
      );

      // Calculate the strokeDashoffset based on the progress value
      const maxDashOffset = 126; // Circumference of the half circle
      const targetDashOffset = maxDashOffset * (1 - progressValue / 100);

      gsap.fromTo(
        progressBar,
        { strokeDashoffset: maxDashOffset },
        {
          strokeDashoffset: targetDashOffset,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: progressBar.closest(
              ".card-business__progress-bar-wrapper"
            ),
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // scroll down text animation

    if (window.innerWidth > 768) {
      gsap.to(".sidebar_scroll", {
        y: -60, // Move up by -60px
        duration: 1.2, // Duration of the animation
        yoyo: true, // Make the animation reverse
        repeat: -1, // Repeat indefinitely
        ease: "power1.inOut", // Easing function
      });
    }

    // business value animation

    const statsText = document.querySelectorAll(
      ".card-business__stats-text-main"
    );

    statsText.forEach((text) => {
      const splitText = new SplitType(text, { types: "chars" });

      splitText.chars.forEach((char, index) => {
        if (char.textContent.trim() !== "") {
          const finalValue = parseInt(char.textContent, 10);
          if (!isNaN(finalValue)) {
            if (index % 2 === 0) {
              const obj = { value: 0 };
              gsap.fromTo(
                obj,
                { value: 0, delay: 0.1 },
                {
                  value: finalValue,
                  duration: 3,
                  ease: "power3.out",
                  onUpdate: function () {
                    char.textContent = Math.round(obj.value);
                  },
                  scrollTrigger: {
                    trigger: ".business",
                  },
                  delay: 0.1,
                }
              );
            }
            gsap.fromTo(
              char,
              {
                y: index % 2 === 0 ? -50 : 50,
                opacity: 0,
                delay: 0.1,
              },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                  trigger: ".card-business__stats-text-main",
                },
                delay: 0.1,
              }
            );
          }
        }
      });
    });

    // follow cursor animation

    const mouseFollowImages = document.querySelectorAll(".mouse-follow");

    if (window.innerWidth > 992) {
      mouseFollowImages.forEach((item) => {
        document.addEventListener("mousemove", function (e) {
          const { clientX: mouseX, clientY: mouseY } = e;
          const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

          const moveX = (mouseX / windowWidth - 0.5) * 20; // Adjust the multiplier for more or less movement
          const moveY = (mouseY / windowHeight - 0.5) * 20; // Adjust the multiplier for more or less movement

          item.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
      });
    }

    // robot anims

    const robot = document.getElementById("thankyou-robot");
    const robotDec1 = this.document.querySelector(".robot-dec-1");
    const robotDec2 = this.document.querySelector(".robot-dec-2");

    gsap.to(robot, {
      y: -50,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.to(robotDec1, {
      x: 30,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.in",
    });

    gsap.to(robotDec2, {
      x: 40,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.in",
    });

    // button icon animation hubspot power

    const btn = document.querySelector(".power__img-top-layer");
    const btnIcon = document.querySelector(".power__img-top-layer-btn-icon");

    btn.addEventListener("mouseenter", function () {
      gsap
        .timeline()
        .to(btnIcon, {
          x: "50px",
          opacity: 0,
          duration: 0.05,
          ease: "power1.inOut",
        })
        .set(btnIcon, { x: "-100px", delay: 0.2 })
        .to(btnIcon, {
          x: "0",
          opacity: 1,
          duration: 0.05,
          delay: 0.1,
          ease: "power1.inOut",
        });
    });
  });
  // endless purpose circle light spin animation

  gsap.to(".purpose__center-light", {
    rotation: 360,
    duration: 5,
    repeat: -1,
    ease: "linear",
  });

  // perspective dashboard

  gsap.fromTo(
    ".marketing__dashboard",
    { transform: "perspective(1000px) rotateX(10deg)" }, // Default state
    {
      transform: "perspective(1000px) rotateX(0deg)", // Animated state
      scrollTrigger: {
        trigger: ".marketing__dashboard",
        start: "center 80%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
      duration: 0.3,
    }
  );

  // btn

  const btn = document.querySelectorAll(".btn");

  btn.forEach(b => {
    const hoverline = b.querySelector(".hoverline.chnage-gredient");

    console.log(b)

    b.addEventListener("mouseenter", () => {
      if(hoverline) {
        hoverline.style.transition = "left 0.9s ease"; // Ensure smooth transition on hover
        hoverline.style.left = "100%";
      }
    });

    b.addEventListener("mouseleave", () => {
      if(hoverline) {
        hoverline.style.transition = "none";
        hoverline.style.left = "-200%";

        hoverline.offsetHeight;

        hoverline.style.transition = "left 0.9s ease";
      }
    });
  })
  
});

