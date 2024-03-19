const timeDisplay = document.getElementById("timeDisplay");
let intervalID;

function format(hrs,mins,secs){
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;
    hrs = pad(hrs);
    mins = pad(mins);
    secs = pad(secs);
    function pad(unit){
        return ("0" + unit).length > 2 ? unit : "0" + unit;   
     }
    return `${hrs}:${mins}:${secs} ${amPm}`;
}

function updateTime(){
    const now = new Date();
    const hrs = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();
    const formattedTime = format(hrs,mins,secs);
    timeDisplay.textContent = formattedTime;
    
}

window.onload = () => {
    intervalID = setInterval(updateTime, 1000);
};

