function fireworksClassic(view, x, y, sectionCount, offsetAngle, dotWidth, red, green, blue) {
  clean(view);
  let viewWidth = view.getBoundingClientRect().width;
  let viewHeight = view.getBoundingClientRect().height;
  x  = (typeof x == 'number') ?  x : Math.random() * viewWidth;
  y  = (typeof y == 'number') ?  y : Math.random() * viewHeight;
  sectionCount = Math.floor((sectionCount <= 20 && sectionCount >= 2) ?  sectionCount : Math.random() * 8 + 6);
  sectionAngle = 360 / sectionCount;
  offsetAngle = (typeof offsetAngle == 'number') ?  offsetAngle % 360 : Math.random() * 360;
  dotWidth = (typeof dotWidth == 'number') ?  dotWidth : Math.random() * 20 + 5;
  red = (red <= 255 && red >= 0) ?  red : Math.random() * 200 + 55;
  green = (green <= 255 && green >= 0) ?  green : Math.random() * 200 + 55;
  blue = (blue <= 255 && blue >= 0) ?  blue : Math.random() * 200 + 55;
  mainframe = document.createElement("DIV");
  mainframe.setAttribute("expire", Date.now() + 1200);
  mainframe.className = "fireworksClassicFrame";
  mainframe.style.left = (x - 150) + "px";
  mainframe.style.top = (y - 150) + "px";
  view.appendChild(mainframe);
  let core = document.createElement("DIV");
  core.style.borderColor = "rgb(" + red + "," + green + "," + blue + ")";
  mainframe.appendChild(core);
  core.animate([
    {width: "10px", height: "10px", borderRadius: "10px", borderWidth: "5px", opacity: 1, filter: "blur(0px)", transform: "translate(0px,0px)"},
    {width: "80px", height: "80px", borderRadius: "80px", borderWidth: "25px", opacity: 0, filter: "blur(20px)", transform: "translate(-35px,-35px)"}
  ],{
    duration: 600,
    easing: "ease-out",
    fill: "forwards"
  });
  let halo = document.createElement("DIV");
  halo.style.borderColor = "rgb(" + red + "," + green + "," + blue + ")";
  mainframe.appendChild(halo);
  halo.animate([
    {width: "10px", height: "10px", borderRadius: "10px", borderWidth: "5px", opacity: 1, filter: "blur(5px)", transform: "translate(0px,0px)"},
    {width: "250px", height: "250px", borderRadius: "250px", borderWidth: "35px", opacity: 0, filter: "blur(30px)", transform: "translate(-120px,-120px)"}
  ],{
    duration: 1000,
    easing: "ease-out",
    fill: "forwards"
  });
  let dot;
  for (let i = 0; i < sectionCount; i++) {
    dot = document.createElement("DIV");
    dot.style.width = dotWidth + "px";
    dot.style.left = 150 - dotWidth / 2 + "px";
    dot.style.transformOrigin = dotWidth / 2 + "px 0px";
    dot.style.borderRadius = Math.random() * dotWidth + "px " + Math.random() * dotWidth + "px " + Math.random() * dotWidth + "px " + Math.random() * dotWidth + "px";
    dot.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    mainframe.appendChild(dot);
    dot.animate([
      {transform: "rotate(" + (sectionAngle * i + offsetAngle) + "deg) translateY(-10px)"},
      {transform: "rotate(" + (sectionAngle * i + offsetAngle) + "deg) translateY(150px)"}
    ],{
      duration: 1200,
      easing: "ease-out",
      fill: "forwards"
    });
    dot.animate([
      {opacity: 1, filter: "blur(0px)"},
      {opacity: 0.8, filter: "blur(0px)", offset:0.6},
      {opacity: 0, filter: "blur(10px)"}
    ],{
      duration: 1200,
      easing: "ease-out",
      fill: "forwards"
    });
    dot.animate([
      {height: "10px", borderBottomWidth: "10px"},
      {height: "30px", borderBottomWidth: "12px", offset: 0.2},
      {height: "0px", borderBottomWidth: "0px"}
    ],{
      duration: 1200,
      easing: "ease-out",
      fill: "forwards"
    });
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
