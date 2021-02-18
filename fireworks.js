function fireworkClassic(view, x, y, sectionCount, offsetAngle, dotWidth, red, green, blue) {
  let viewWidth = view.getBoundingClientRect().width;
  let viewHeight = view.getBoundingClientRect().height;
  x  = (typeof x == 'number') ?  x : Math.random() * viewWidth;
  y  = (typeof y == 'number') ?  y : Math.random() * viewHeight;
  sectionCount = Math.floor((sectionCount <= 14 && sectionCount >= 6) ?  sectionCount : Math.random() * 8 + 6);
  sectionAngle = 360 / sectionCount;
  offsetAngle = (typeof offsetAngle == 'number') ?  offsetAngle : Math.random() * 360;
  dotWidth = (typeof dotWidth == 'number') ?  dotWidth : Math.random() * 20 + 5;
  red = (red <= 255 && red >= 0) ?  red : Math.random() * 200 + 55;
  green = (green <= 255 && green >= 0) ?  green : Math.random() * 200 + 55;
  blue = (blue <= 255 && blue >= 0) ?  blue : Math.random() * 200 + 55;
  clean(view);
  mainframe = document.createElement("DIV");
  mainframe.setAttribute("birth", Date.now());
  mainframe.className = "mainframe";
  mainframe.style.left = (x - 150) + "px";
  mainframe.style.top = (y - 150) + "px";
  view.appendChild(mainframe);
  let frame;
  let dot;
  let core = document.createElement("DIV");
  core.className = "core";
  core.style.borderColor = "rgb(" + (red + 30) + "," + (green + 30) + "," + (blue + 30) + ")";
  mainframe.appendChild(core);
  for (let i = 0; i < sectionCount; i++) {
    frame = document.createElement("DIV");
    frame.className = "frame";
    frame.style.transform = "rotate(" + (sectionAngle * i + offsetAngle) + "deg)";
    dot = document.createElement("DIV");
    dot.className = "dot";
    dot.style.width = dotWidth + "px";
    dot.style.left = 20 - dotWidth / 2 + "px";
    dot.style.borderRadius = Math.random() * dotWidth + "px " + Math.random() * dotWidth + "px " + Math.random() * dotWidth + "px " + Math.random() * dotWidth + "px";
    dot.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    frame.appendChild(dot);
    mainframe.appendChild(frame);
  }
}

function clean(view){
  let nodes = view.childNodes;
  let node;
  nodes.forEach(function(node){
    if (node.tagName == "DIV") {
      if (Date.now() - parseInt(node.getAttribute("birth")) > 1200) {
        view.removeChild(node);
      }
    }
  });
}
