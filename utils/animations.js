// This file has the logic of the animations of the main divs(entering-leaving the DOM).

function enteringAnimation(element) {
  gsap.fromTo(
    element,
    { y: "70vh", display: "none", opacity: 0 },
    {
      y: 0,
      display: "flex",
      opacity: 1,
      ease: "elastic.out(1, 0.95)",
      duration: 1.5,
      delay: 0.7,
    }
  );
}

function leavingAnimation(element) {
  gsap.to(element, {
    display: "none",
    duration: 0.3,
    opacity: 0,
    y: "-30vh",
  });
}

export { enteringAnimation, leavingAnimation };
