function fireworksClassic(view, x, y, radius, sectionCount, offsetAngle, dotWidth, red, green, blue) {
  let viewWidth = view.getBoundingClientRect().width;
  let viewHeight = view.getBoundingClientRect().height;
  x  = (typeof x == 'number') ?  x : Math.random() * viewWidth;
  y  = (typeof y == 'number') ?  y : Math.random() * viewHeight;
  radius  = (typeof radius == 'number') ?  radius : Math.random() * 250 + 25;
  duration  = (typeof duration == 'number') ?  duration : 1200;
  sectionCount = Math.floor((sectionCount <= 20 && sectionCount >= 2) ?  sectionCount : Math.random() * 8 + 6);
  sectionAngle = 360 / sectionCount;
  offsetAngle = (typeof offsetAngle == 'number') ?  offsetAngle % 360 : Math.random() * 360;
  dotWidth = (typeof dotWidth == 'number') ?  dotWidth : (Math.random() * 0.15 + 0.03) * radius;
  red = (red <= 255 && red >= 0) ?  red : Math.random() * 200 + 55;
  green = (green <= 255 && green >= 0) ?  green : Math.random() * 200 + 55;
  blue = (blue <= 255 && blue >= 0) ?  blue : Math.random() * 200 + 55;
  mainframe = document.createElement("DIV");
  mainframe.setAttribute("expire", Date.now() + 1200);
  mainframe.className = "fireworksClassicFrame";
  mainframe.style.left = (x - radius) + "px";
  mainframe.style.top = (y - radius) + "px";
  view.appendChild(mainframe);
  let halo = document.createElement("DIV");
  halo.className = "fireworksClassicHalo";
  halo.style.borderColor = "rgb(" + red + "," + green + "," + blue + ")";
  halo.style.left = 0.96 * radius + "px";
  halo.style.top = 0.96 * radius + "px";
  mainframe.appendChild(halo);
  halo.animate([
    {width: 0.08 * radius + "px", height: 0.08 * radius + "px", borderRadius: 0.04 * radius + "px", borderWidth: "0px", opacity: 1, filter: "blur(0px)", left: 0.96 * radius + "px", top: 0.96 * radius + "px", backgroundColor: "rgba(" + (red + 50) + "," + (green + 50) + "," + (blue + 50) + ",0.8)"},
    {width: 1.8 * radius + "px", height: 1.8 * radius + "px", borderRadius: 0.9 * radius + "px", borderWidth: 0.24 * radius + "px", opacity: 0, filter: "blur(" + 0.2 * radius + "px)", left: 0.1 * radius + "px", top: 0.1 * radius + "px", backgroundColor: "rgba(" + red + "," + green + "," + blue + ",0)"}
  ],{
    duration: duration * 0.85,
    easing: "ease-out",
    fill: "forwards"
  });
  let dot;
  for (let i = 0; i < sectionCount; i++) {
    dot = document.createElement("DIV");
    dot.className = "fireworksClassicDot";
    dot.style.width = dotWidth + "px";
    dot.style.left = radius - dotWidth / 2 + "px";
    dot.style.top = radius + "px";
    dot.style.transformOrigin = dotWidth / 2 + "px 0px";
    dot.style.borderRadius = Math.random() * dotWidth + "px " + Math.random() * dotWidth + "px " + Math.random() * dotWidth + "px " + Math.random() * dotWidth + "px";
    dot.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    mainframe.appendChild(dot);
    dot.animate([
      {transform: "rotate(" + (sectionAngle * i + offsetAngle) + "deg) translateY(-" + 0.07 * radius + "px)"},
      {transform: "rotate(" + (sectionAngle * i + offsetAngle) + "deg) translateY(" + radius + "px)"}
    ],{
      duration: duration,
      easing: "ease-out",
      fill: "forwards"
    });
    dot.animate([
      {opacity: 1, filter: "blur(0px)"},
      {opacity: 0.8, filter: "blur(0px)", offset:0.6},
      {opacity: 0, filter: "blur(" + 0.07 * radius + "px)"}
    ],{
      duration: duration,
      easing: "ease-out",
      fill: "forwards"
    });
    dot.animate([
      {height: 0.07 * radius + "px", borderBottomWidth: 0.07 * radius + "px"},
      {height: 0.2 * radius + "px", borderBottomWidth: 0.08 * radius + "px", offset: 0.2},
      {height: "0px", borderBottomWidth: "0px"}
    ],{
      duration: duration,
      easing: "ease-out",
      fill: "forwards"
    });
    setTimeout(function() {
      clean(view);
    }, duration)
  }
}

function clean(view){
  let nodes = view.childNodes;
  nodes.forEach(function(node){
    if (node.className == "fireworksClassicFrame") {
      if (Date.now() >= parseInt(node.getAttribute("expire"))) {
        view.removeChild(node);
      }
    }
  });
}
