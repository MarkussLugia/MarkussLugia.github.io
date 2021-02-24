function myNintendoAnimation() {
  document.getElementById("myNintendoRedBg").animate([
    {opacity:0.001},
    {opacity:1,offset:0.08},
    {opacity:1,offset:0.49},
    {opacity:0,offset:0.50},
    {opacity:0}
  ],{
    duration:9999,
    delay:1,
    fill: "forwards"
  }).finish();
  document.getElementById("myNintendoRollingPoint").animate([
    {left: "-10vh", transform: "rotate(0deg)"},
    {left: "36vw", transform: "rotate(1200deg)"}
  ],{
    duration:3000,
    delay:900,
    fill: "forwards"
  }).finish();
  document.getElementById("myNintendoFallingPointSlow").animate([
    {bottom: "-18vh"},
    {top: "20vh"}
  ],{
    duration:4000,
    delay:2500,
    fill: "forwards"
  }).finish();
  document.getElementById("myNintendoFallingPointFast").animate([
    {bottom: "-32vh"},
    {top: "50vh"}
  ],{
    duration:4000,
    delay:2700,
    fill: "forwards"
  }).finish();
  document.getElementById("myNintendoMiiFront").animate([
    {bottom: "-20vh"},
    {bottom: "-1vh"},
    {bottom: "-5vh"},
    {bottom: "-1vh"},
    {bottom: "-5vh"},
    {bottom: "-1vh"},
    {bottom: "-5vh"},
    {bottom: "-1vh"},
    {bottom: "0vh"},
    {bottom: "-20vh"},
    {bottom: "-20vh"},
  ],{
    duration:3500,
    delay:6500,
    fill: "forwards"
  }).finish();
  document.getElementById("myNintendoMiiBack").animate([
    {bottom: "-20vh"},
    {bottom: "-20vh"},
    {bottom: "-1vh"},
    {bottom: "-5vh"},
    {bottom: "-1vh"},
    {bottom: "-5vh"},
    {bottom: "-1vh"},
    {bottom: "-5vh"},
    {bottom: "-1vh"},
    {bottom: "0vh"},
    {bottom: "-20vh"},
  ],{
    duration:3500,
    delay:6500,
    fill: "forwards"
  }).finish();
}
