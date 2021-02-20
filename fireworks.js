function fireworksClassic(view, x, y, radius, duration, offsetAngle, dotCount, dotWidth, red, green, blue) {
  let viewWidth = view.getBoundingClientRect().width;
  let viewHeight = view.getBoundingClientRect().height;
  x  = (typeof x == 'number') ?  x : Math.random() * viewWidth;
  y  = (typeof y == 'number') ?  y : Math.random() * viewHeight;
  radius  = (typeof radius == 'number') ?  radius : Math.random() * 100 + 100;
  duration  = (typeof duration == 'number') ?  duration : 1200;
  dotCount = Math.floor((dotCount <= 20 && dotCount >= 2) ?  dotCount : Math.random() * 8 + 6);
  avAngle = 360 / dotCount;
  offsetAngle = (typeof offsetAngle == 'number') ?  offsetAngle % 360 : Math.random() * 360;
  dotWidth = (typeof dotWidth == 'number') ?  dotWidth : (Math.random() * 0.15 + 0.03) * radius;
  red = (typeof red == 'number') ?  red : Math.random() * 200 + 55;
  green = (typeof green == 'number') ?  green : Math.random() * 200 + 55;
  blue = (typeof blue == 'number') ?  blue : Math.random() * 200 + 55;
  mainframe = document.createElement("DIV");
  mainframe.setAttribute("expire", Date.now() + duration);
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
    {
      width: 0.08 * radius + "px",
      height: 0.08 * radius + "px",
      borderRadius: 0.04 * radius + "px",
      borderWidth: "0px",
      opacity: 1,
      filter: "blur(0px)",
      left: 0.96 * radius + "px",
      top: 0.96 * radius + "px",
      backgroundColor: "rgba(" + (red + 50) + "," + (green + 50) + "," + (blue + 50) + ",1)"
    },
    {
      backgroundColor: "rgba(" + red + "," + green + "," + blue + ",0.2)",
      offset: 0.4
    },
    {
      width: 1.8 * radius + "px",
      height: 1.8 * radius + "px",
      borderRadius: 0.9 * radius + "px",
      borderWidth: 0.24 * radius + "px",
      opacity: 0,
      filter: "blur(" + 0.2 * radius + "px)",
      left: 0.1 * radius + "px",
      top: 0.1 * radius + "px",
      backgroundColor: "rgba(" + red + "," + green + "," + blue + ",0)"
    }
  ],{
      duration: duration * 0.85,
      easing: "ease-out",
      fill: "forwards"
  });
  let dot;
  for (let i = 0; i < dotCount; i++) {
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
      {
        transform: "rotate(" + (avAngle * i + offsetAngle) + "deg) translateY(-" + 0.07 * radius + "px)",
        opacity: 1,
        filter: "blur(0px)",
        height: 0.07 * radius + "px",
        borderBottomWidth: 0.2 * radius + "px",
        borderBottomColor: "rgba(255,255,255,1)"
      },
      {
        height: 0.2 * radius + "px",
        borderBottomWidth: 0.15 * radius + "px",
        borderBottomColor: "rgba(255,255,255,1)",
        offset: 0.2
      },
      {
        opacity: 0.9,
        filter: "blur(0px)",
        borderBottomWidth: 0.05 * radius + "px",
        offset:0.6
      },
      {
        opacity: 0.7,
        borderBottomColor: "rgba(" + red + "," + green + "," + blue + ",0.5)",
        offset:0.8
      },
      {
        transform: "rotate(" + (avAngle * i + offsetAngle) + "deg) translateY(" + radius + "px)",
        opacity: 0,
        filter: "blur(" + 0.08 * radius + "px)",
        height: "0px",
        borderBottomWidth: "0px",
        borderBottomColor: "rgba(" + red + "," + green + "," + blue + ",0)"
      }
    ],{
        duration: duration,
        easing: "ease-out",
        fill: "forwards"
    });
  }
  setTimeout(function() {clean(view)}, duration);
  return mainframe;
}

function clean(view){
  for (var node of view.childNodes) {
    if (node.className == "fireworksClassicFrame") {
      if (Date.now() >= parseInt(node.getAttribute("expire"))) {
        view.removeChild(node);
        return;
      }
    }
  }
}
