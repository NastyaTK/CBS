let hours = 0;
let minutes = 0;
let seconds = 0;
let secondsTimer, minutesTimer, hoursTimer;
let start = document.getElementById('start-btn');
let stop = document.getElementById('stop-btn');
let reset = document.getElementById('reset-btn');
let secondsWrap = document.getElementById('seconds');
let minutesWrap = document.getElementById('minutes');
let hoursWrap = document.getElementById('hours');
function countSeconds() {
    seconds = seconds < 59 ? seconds + 1 : 0;
    secondsWrap.innerHTML = seconds;
}
function countMinutes() {
    minutes = minutes < 59 ? minutes + 1 : 0;
    minutesWrap.innerHTML = minutes + ":";
}
function countHours() {
    hours = hours < 23 ? hours + 1 : 0;
    hoursWrap.innerHTML = hours + ":";
}
start.onclick = function () {
    secondsTimer = setInterval(() => {
        countSeconds();
    }, 1000);
    minutesTimer = setInterval(() => {
        countMinutes();
    }, 59999);
    hoursTimer = setInterval(() => {
        countHours();
    }, 359999);
}
stop.onclick = function () {
    clearInterval(secondsTimer);
    clearInterval(minutesTimer);
    clearInterval(hoursTimer);
}
reset.onclick = function () {
    hours = 0;
    hoursWrap.innerHTML = "00:";
    minutes = 0;
    minutesWrap.innerHTML = "00:";
    seconds = 0;
    secondsWrap.innerHTML = "00";
}