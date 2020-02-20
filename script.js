const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//Initial Time values
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

//Initial hand position values
let hourPos = (hr * 360/12) + (min * (360/60)/12);
let minPos = (min * 360/60) + (sec * (360/60)/60);
let secPos = sec* 360/60;    

function initClock(){


    //Increment position by degree
    hourPos = hourPos + (3/360);
    minPos = minPos + (6/60)
    secPos = secPos + (36/6);

    //Set hand position
    HOURHAND.style.transform = "rotate(" + hourPos + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPos + "deg)";    
}

setInterval(initClock, 1000);