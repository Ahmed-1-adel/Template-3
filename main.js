let mySkills = document.querySelectorAll(".skill-progress span");
let sections = document.querySelector(".our-skills");

window.onscroll = function () {
  if (window.scrollY >= sections.offsetTop) {
    mySkills.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

let nums = document.querySelectorAll(".box .number");
let section = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// CountDown
let countDownData = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  let dateDiff = countDownData - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".Days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".Hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".Minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".Seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);
