
// * Clock *

var clock = {
    "data": {
        "digital": "00:00:00", //hh + ":" + mm + ":" + ss,
        "hh": 0,
        "mm": 0,
        "ss": 0
    },
    "utils": {
        deg2rad: function (d) { return (2 * d / 360) * Math.PI; }
    },
    "tic": function() {
        var date = new Date();
        this.data.hh = date.getHours();
        this.data.mm = date.getMinutes();
        this.data.ss = date.getSeconds();
        this.data.digital = this.data.hh + ":" + this.data.mm + ":" + this.data.ss;
    },
    "log": function() {
        console.log("Curent Time: " + clock.data.hh + ":" + clock.data.mm + ":" + clock.data.ss);
    },
    "refreshUI": function() {

        var hh = this.data.hh * 30 - 90;
        var mm = this.data.mm * 6 - 90;
        var ss = this.data.ss * 6 - 90;

        var minute = document.getElementById("minute");
        var hour = document.getElementById("hour");
        var second = document.getElementById("second");

        second.style.transform = 'rotate(' + ss + 'deg)';
        minute.style.transform = 'rotate(' + mm + 'deg)';
        hour.style.transform = 'rotate(' + hh + 'deg)';

        second.style.webkitTransform = 'rotate(' + ss + 'deg)';
        minute.style.webkitTransform = 'rotate(' + mm + 'deg)';
        hour.style.webkitTransform = 'rotate(' + hh + 'deg)';

        // second.style.MozTransform = 'rotate(' + ss + 'deg)';
        // minute.style.MozTransform = 'rotate(' + mm + 'deg)';
        // hour.style.MozTransform = 'rotate(' + hh + 'deg)';
    },
    "init": function() {
        var el = document.getElementById("clock-circle");
        el.innerHTML = el.innerHTML + this.drawDots();
        this.drawDots();
    },
    "drawDots": function() {
        var str = '<div class="dots-container">';
        for (var i = 0; i < 12; i++){
            var hh = i * 30 - 90;
            var transformCss = 'transform: rotate(' + hh + 'deg) translateX(200px); -webkit-transform: rotate(' + hh + 'deg) translateX(200px);';
            str += '<div class="dot" style="'+ transformCss +'"></div>';
        }
        str += '</div>'; // -webkit-transform: translateX(-100%);
        return str
    }
};