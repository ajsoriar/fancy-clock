var DigitalClock = {};

DigitalClock.showTime = function(){
    var date = new Date(),
        h = date.getHours(), // 0 - 23
        m = date.getMinutes(), // 0 - 59
        s = date.getSeconds(), // 0 - 59    
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " "; // + session;
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;  
};
