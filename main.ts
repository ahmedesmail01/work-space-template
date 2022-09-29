let sec = document.querySelector("#our-skills") as HTMLElement;
let spans = document.querySelectorAll(
  "#our-skills .container .skills .skill .the-progress span"
);

window.onscroll = function () {
  if (window.scrollY >= sec.offsetTop - 100) {
    spans.forEach((span) => {
      (span as HTMLElement).style.width = span.dataset.width;
    });
  }
};

/* applying the countdown date */
const countdown = new Date("sep 5 , 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let datenow = new Date().getTime();
  let timediff = countdown - datenow;

  let days = Math.floor(timediff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timediff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timediff % (1000 * 60)) / 1000);

  if (timediff < 0) {
    clearInterval(counter);
  }
  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
}, 1000);
