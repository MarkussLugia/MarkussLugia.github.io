function fireworksClassic(view, x, y, radius, duration = 1200, offsetAngle, dotCount, dotWidth, rgb) {
  let viewWidth = view.getBoundingClientRect().width;
  let viewHeight = view.getBoundingClientRect().height;
  x  = (typeof x == 'number') ?  x : Math.random() * viewWidth;
  y  = (typeof y == 'number') ?  y : Math.random() * viewHeight;
  radius  = (typeof radius == 'number') ?  radius : (Math.random() + 0.1) * (viewWidth + viewHeight) * 0.1;
  dotCount = Math.floor((dotCount <= 20 && dotCount >= 2) ?  dotCount : Math.random() * 8 + 6);
  avAngle = 360 / dotCount;
  offsetAngle = (typeof offsetAngle == 'number') ?  offsetAngle % 360 : Math.random() * 360;
  dotWidth = (typeof dotWidth == 'number') ?  dotWidth : (Math.random() * 0.15 + 0.03) * radius;
  if (rgb && typeof rgb[0] == 'number' && typeof rgb[1] == 'number' && typeof rgb[2] == 'number'){
    this.rgb = rgb
  }
  else{
    this.rgb = [Math.random() * 200 + 55, Math.random() * 200 + 55, Math.random() * 200 + 55]
  }
  this.mainframe = document.createElement("DIV");
  mainframe.setAttribute("expire", Date.now() + duration);
  mainframe.className = "fireworksClassicFrame";
  mainframe.style.left = (x - radius) + "px";
  mainframe.style.top = (y - radius) + "px";
  view.appendChild(mainframe);
  let halo = document.createElement("DIV");
  halo.className = "fireworksClassicHalo";
  halo.style.borderColor = "rgb(" + this.rgb[0] + "," + this.rgb[1] + "," + this.rgb[2] + ")";
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
      backgroundColor: "rgba(" + (this.rgb[0] + 50) + "," + (this.rgb[1] + 50) + "," + (this.rgb[2] + 50) + ",1)"
    },
    {
      backgroundColor: "rgba(" + this.rgb[0] + "," + this.rgb[1] + "," + this.rgb[2] + ",0.2)",
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
      backgroundColor: "rgba(" + this.rgb[0] + "," + this.rgb[1] + "," + this.rgb[2] + ",0)"
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
    dot.style.backgroundColor = "rgb(" + this.rgb[0] + "," + this.rgb[1] + "," + this.rgb[2] + ")";
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
        borderBottomColor: "rgba(" + this.rgb[0] + "," + this.rgb[1] + "," + this.rgb[2] + ",0.5)",
        offset:0.8
      },
      {
        transform: "rotate(" + (avAngle * i + offsetAngle) + "deg) translateY(" + radius + "px)",
        opacity: 0,
        filter: "blur(" + 0.08 * radius + "px)",
        height: "0px",
        borderBottomWidth: "0px",
        borderBottomColor: "rgba(" + this.rgb[0] + "," + this.rgb[1] + "," + this.rgb[2] + ",0)"
      }
    ],{
        duration: duration,
        easing: "ease-out",
        fill: "forwards"
    });
  }
  setTimeout(function() {clean(view, "fireworksClassicFrame")}, duration);
  return this;
}

function clean(view, className){
  for (var node of view.childNodes) {
    if (node.className == className) {
      if (Date.now() >= parseInt(node.getAttribute("expire"))) {
        view.removeChild(node);
        return;
      }
    }
  }
}
