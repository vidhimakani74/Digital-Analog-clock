const hours_needle = document.querySelector('.hours-needle');
const minutes_needle = document.querySelector('.minutes-needle');
const seconds_needle = document.querySelector('.seconds-needle');
const ampmc = document.getElementById("ampm");

const digital = document.querySelector('.digital');

setInterval(() => {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm="AM";

    hours_needle.style.transform = `translate(-50%, -100%) rotate(${(360 * hours) / 12}deg)`
    minutes_needle.style.transform = `translate(-50%, -100%) rotate(${(360 * minutes) / 60}deg)`
    seconds_needle.style.transform = `translate(-50%, -100%) rotate(${(360 * seconds) / 60}deg)`

    if (hours > 12) {
        hours = hours - 12;
        ampm = "PM";

    }

    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    
    digital.innerHTML = `<span class="hours">${hours}</span> :
                        <span class="minutes">${minutes}</span> :
                        <span class="seconds">${seconds}</span>
                        <span class="ampm">${ampm}</span>`
}, 1000)