var sec = document.querySelector("#our-skills");
var spans = document.querySelectorAll("#our-skills .container .skills .skill .the-progress span");
window.onscroll = function () {
    if (window.scrollY >= sec.offsetTop - 100) {
        spans.forEach(function (span) {
            span.style.width = span.dataset.width;
        });
    }
};
/* applying the countdown date */
var countdown = new Date("sep 5 , 2023 23:59:59").getTime();
var counter = setInterval(function () {
    var datenow = new Date().getTime();
    var timediff = countdown - datenow;
    var days = Math.floor(timediff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timediff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timediff % (1000 * 60)) / 1000);
    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
}, 1000);
