// Header is a progress bar. This determines its width and its animation.

function header(index) {
  const header = document.querySelector("header");
  gsap.to(header, {
    width: `${(index * 100) / 8}%`,
    duration: 2,
    ease: "elastic.out(2.5, 1)",
  });
}

export { header };
