let mySkills = document.querySelectorAll(".skill-progress span");
let sections = document.querySelector(".our-skills");

window.onscroll = function () {
  if (window.scrollY >= sections.offsetTop) {
    mySkills.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
