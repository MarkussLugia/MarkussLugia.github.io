function backgroundWave(view, x, y, radius, duration) {
  x  = (typeof x == 'number') ?  x : Math.random() * view.getBoundingClientRect().width;
  y  = (typeof y == 'number') ?  y : Math.random() * view.getBoundingClientRect().height;
  radius  = (typeof radius == 'number') ?  radius : view.getBoundingClientRect().height;
  duration  = (typeof duration == 'number') ?  duration : 12000;
  let wave = document.createElement("DIV");
  wave.setAttribute("expire", Date.now() + duration);
  wave.className = "backgroundWave";
  wave.style.position = "absolute";
  wave.style.left = x + "px";
  wave.style.top = y + "px";
  wave.style.borderStyle = "solid";
  wave.style.borderColor = "#888888";
  wave.style.boxSizing = "border-box";
  wave.style.zIndex = -1;
  view.appendChild(wave);
  wave.animate([
    {
      width: "0px",
      height: "0px",
      opacity: 0.3,
      borderRadius: "0px",
      borderWidth: "0px",
    },
    {
      borderWidth: 0.012 * radius + "px",
      offset: 0.1
    },
    {
      opacity: 0.3,
      offset: 0.7
    },
    {
      transform: "translate(-" + radius + "px, -" + radius + "px)",
      width: radius*2 + "px",
      height: radius*2 + "px",
      borderRadius: radius + "px",
      borderWidth: 0.002 * radius + "px",
      opacity: 0,
    }
  ],{
      duration: duration,
      easing: "ease-out",
      fill: "forwards"
  });
  setTimeout(function() {clean(view, "backgroundWave")}, duration);
}
