let hoursSpan = document.querySelector(".hours");
let minutesSpan = document.querySelector(".minutes");
let secondsSpan = document.querySelector(".seconds");

let currentTime = new Date();

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

hoursSpan.textContent = hours;
minutesSpan.textContent = minutes;
secondsSpan.textContent = seconds;

setInterval(() => {
    seconds = Number(secondsSpan.textContent);
    minutes = Number(minutesSpan.textContent);
    hours = Number(hoursSpan.textContent);

    seconds = seconds + 1;

    if (seconds === 60) {
        seconds = 0;
        minutes = minutes + 1
    }

    if (minutes === 60) {
        seconds = 0;
    }

    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;

}, 1000);


