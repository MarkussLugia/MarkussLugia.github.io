let dayChart = ["日","一","二","三","四","五","六"];

function twoDigit(int){
    let str;
    str = int.toString();
    if(int < 10){
        str = "0" + str;
    }
    return str;
}
  
function syncTime(hour,minute,ampm,datestring,initial=false) {
    let time = new Date();
    if (initial) {
        minute.innerHTML = twoDigit(time.getMinutes());
        if (time.getHours() == 0){
            hour.innerHTML = 12;
        }
        else{
            hour.innerHTML = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
        }
        if (time.getHours() < 12) {
            ampm.src = "res/am.svg"
        }
        else{
            ampm.src = "res/pm.svg"
        }
        datestring.innerHTML = time.getMonth() + 1 + "—" + time.getDate() + "日(" + dayChart[time.getDay()] + ")";
    }
    else if (time.getSeconds() < 3){
        minute.innerHTML = twoDigit(time.getMinutes());
        if (time.getMinutes() == 0){
            if (time.getHours() == 0){
                hour.innerHTML = 12;
                datestring.innerHTML = time.getMonth() + 1 + "—" + time.getDate() + "日(" + dayChart[time.getDay()] + ")";
            }
            else{
                hour.innerHTML = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
            }
            ampm.src = time.getHours() < 12 ? "res/am.svg" : "res/pm.svg";
        }
    }
    t = setTimeout(function() {
        syncTime(hour,minute,ampm,datestring)
    }, 1000);
}

function tickAnimation(colon) {
    colon.animate([
        {opacity: "1"},
        {opacity: "1", offset: 0.45},
        {opacity: "0", offset:0.5},
        {opacity: "0", offset: 0.95},
        {opacity: "1"}
    ],{
        duration: 2000,
        easing: "linear",
        iterations: Infinity
    })
}