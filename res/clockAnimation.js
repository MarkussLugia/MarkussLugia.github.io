function twoDigit(int){
    let str;
    str = int.toString();
    if(int < 10){
        str = "0" + str;
    }
    return str;
}
  
function syncTime(hour,minute) {
    let time = new Date();
    hour.innerHTML = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    minute.innerHTML = twoDigit(time.getMinutes());
    t = setTimeout(function() {
        syncTime(hour,minute)
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