
function runTheClock(){
    date = new Date();
     
    hr=date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
    minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
    secPosition = sec * 360 / 60;

    hour.style.transform = `rotate(${hrPosition}deg)`;
    minute.style.transform = `rotate(${minPosition}deg)`;
    second.style.transform = `rotate(${secPosition}deg)`;
}

interval = setInterval(runTheClock, 1000);





