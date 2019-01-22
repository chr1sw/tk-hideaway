function updateClock() {

    var clientTime = new Date();
    var currentTime = new Date();
    var timeOffset = -9 * 60 * 60 * 1000;
    currentTime.setTime(clientTime.getTime() + timeOffset);

    var currentHours = currentTime.getUTCHours();
    var currentMinutes = currentTime.getUTCMinutes();
    var currentSlot = "AM";
    var h = currentHours;
 
    if (currentHours >= 12){
        currentSlot = "PM";
    }
    
    if (currentHours > 12){
        currentHours = currentHours-12;
    }
    
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    

    document.getElementById("clock").innerHTML = currentHours + ":" + currentMinutes;
    document.getElementById("slot").innerHTML = currentSlot;
}

window.onload = function() {
    updateClock();
    setInterval(updateClock, 1000);
}