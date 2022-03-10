async function fireworksClassic(view, x, y, radius, duration = 2000, offsetAngle, dotCount, dotWidth, rgb) {
  let fireworkObject = {};
  let viewWidth = view.getBoundingClientRect().width;
  let viewHeight = view.getBoundingClientRect().height;
  x = (typeof x == 'number') ? x : Math.random() * viewWidth;
  y = (typeof y == 'number') ? y : Math.random() * viewHeight;
  radius = (typeof radius == 'number') ? radius : (Math.random() + 0.1) * (viewWidth + viewHeight) * 0.1;
  dotCount = Math.floor((dotCount <= 20 && dotCount >= 2) ? dotCount : Math.random() * 8 + 6);
  avAngle = 360 / dotCount;
  offsetAngle = (typeof offsetAngle == 'number') ? offsetAngle % 360 : Math.random() * 360;
  dotWidth = (typeof dotWidth == 'number') ? dotWidth : (Math.random() * 0.15 + 0.03) * radius;
  if (rgb && typeof rgb[0] == 'number' && typeof rgb[1] == 'number' && typeof rgb[2] == 'number') {
    fireworkObject.rgb = rgb
  }
  else {
    fireworkObject.rgb = [Math.random() * 200 + 55, Math.random() * 200 + 55, Math.random() * 200 + 55]
  }
  fireworkObject.mainframe = document.createElement("DIV");
  fireworkObject.mainframe.className = "fireworksClassicFrame";
  fireworkObject.mainframe.style.left = (x - radius) + "px";
  fireworkObject.mainframe.style.top = (y - radius) + "px";
  view.appendChild(fireworkObject.mainframe);
  let halo = document.createElement("DIV");
  halo.className = "fireworksClassicHalo";
  halo.style.borderColor = "rgb(" + fireworkObject.rgb[0] + "," + fireworkObject.rgb[1] + "," + fireworkObject.rgb[2] + ")";
  halo.style.left = 0.96 * radius + "px";
  halo.style.top = 0.96 * radius + "px";
  fireworkObject.mainframe.appendChild(halo);
  halo.animate(
    [
      {
        width: 0.08 * radius + "px",
        height: 0.08 * radius + "px",
        borderRadius: 0.04 * radius + "px",
        borderWidth: "0px",
        opacity: 0,
        filter: "blur(0px)",
        left: 0.96 * radius + "px",
        top: 0.96 * radius + "px",
        backgroundColor: "rgba(" + (fireworkObject.rgb[0] + 50) + "," + (fireworkObject.rgb[1] + 50) + "," + (fireworkObject.rgb[2] + 50) + ",1)"
      },
      {
        opacity: 1,
        offset: 0.1
      },
      {
        backgroundColor: "rgba(" + fireworkObject.rgb[0] + "," + fireworkObject.rgb[1] + "," + fireworkObject.rgb[2] + ",0.2)",
        offset: 0.5
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
        backgroundColor: "rgba(" + fireworkObject.rgb[0] + "," + fireworkObject.rgb[1] + "," + fireworkObject.rgb[2] + ",0)"
      }
    ],
    {
      duration: duration * 0.85,
      easing: "cubic-bezier(0, 0.54, 0.3, 1)",
      fill: "forwards"
    }
  );
  for (let i = 0; i < dotCount; i++) {
    let dot = document.createElement("DIV");
    dot.className = "fireworksClassicDot";
    dot.style.width = dotWidth + "px";
    dot.style.left = radius - dotWidth / 2 + "px";
    dot.style.top = radius + "px";
    dot.style.transformOrigin = dotWidth / 2 + "px 0px";
    dot.style.borderRadius = Math.random() * dotWidth + "px " + Math.random() * dotWidth + "px " + Math.random() * dotWidth + "px " + Math.random() * dotWidth + "px";
    dot.style.backgroundColor = "rgb(" + fireworkObject.rgb[0] + "," + fireworkObject.rgb[1] + "," + fireworkObject.rgb[2] + ")";
    fireworkObject.mainframe.appendChild(dot);
    dot.animate(
      [
        {
          transform: "rotate(" + (avAngle * i + offsetAngle) + "deg) translateY(-" + 0.07 * radius + "px)",
          opacity: 1,
          filter: "blur(0px) brightness(5)",
          height: 0.07 * radius + "px",
          borderBottomWidth: 0.2 * radius + "px",
          borderBottomColor: "rgba(255,255,255,1)"
        },
        {
          height: 0.2 * radius + "px",
          offset: 0.2
        },
        {
          opacity: 1,
          filter: "blur(0px) brightness(1)",
          borderBottomColor: "rgba(255,255,255,1)",
          borderBottomWidth: 0.02 * radius + "px",
          offset: 0.75
        },
        {
          transform: "rotate(" + (avAngle * i + offsetAngle) + "deg) translateY(" + radius + "px)",
          opacity: 0,
          filter: "blur(" + 0.1 * radius + "px) brightness(0.8)",
          height: 0.1 * radius + "px",
          borderBottomWidth: "0px",
          borderBottomColor: "rgba(" + fireworkObject.rgb[0] + "," + fireworkObject.rgb[1] + "," + fireworkObject.rgb[2] + ",0)"
        }
      ],
      {
        duration: duration,
        easing: "cubic-bezier(0, 0.54, 0.3, 1)",
        fill: "forwards"
      }
    );
  }
  cleanPromise(view, fireworkObject.mainframe, duration);
  return fireworkObject;
}

async function cleanPromise(view, node, duration) {
  await setTimeout(function () { view.removeChild(node) }, duration);
}
