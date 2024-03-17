const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const timeDisplay = document.getElementById("timeDisplay");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let intervalId;
let pause = true;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(pause){
        pause = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime,10);
    }
});

pauseBtn.addEventListener("click", () => {
    if(!pause){
        clearInterval(intervalId);
        pause = true;
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    pause = true;
    startTime = 0;
    elapsedTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    function pad(unit){
        return ("0" + unit).length > 2 ? unit : "0" + unit;
    }
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}