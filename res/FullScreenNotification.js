function fullScreenNotification(textContent,expiration) {
  if (document.getElementById("fullScreenNotificationBackground" != null)) {
    return;
  }
  let background = document.createElement("DIV");
  background.onclick = fullScreenNotificationClose;
  background.id = "fullScreenNotificationBackground";
  document.body.appendChild(background);
  let flexBox = document.createElement("DIV");
  flexBox.id = "fullScreenNotificationFlexBox";
  flexBox.className = "fullScreenNotificationCenterBox";
  background.appendChild(flexBox);
  let textBox = document.createElement("DIV");
  textBox.id = "fullScreenNotificationTextBox";
  textBox.className = "fullScreenNotificationCenterBox";
  flexBox.appendChild(textBox);
  let text = document.createElement("P");
  textContent = textContent.toString().replace("<br>", "\n").replace("<", "&lt;").replace("\n", "<br>");
  text.innerHTML = textContent.replace("\n", "<br>");
  textBox.appendChild(text);
  let notify = document.createElement("P");
  notify.id = "fullScreenNotificationNotify";
  notify.innerHTML = "单击以关闭";
  background.appendChild(notify);
  background.animate([
    {
      opacity: "0"
    },
    {
      opacity: "1"
    }
  ],{
      duration: 500,
      easing: "linear",
      fill: "forwards",
  });
  textBox.animate([
    {
      opacity: "0",
      padding: "0 0"
    },
    {
      opacity: "1",
      padding: "3vh 0px"
    }
  ],{
      duration: 500,
      easing: "ease-out",
      fill: "forwards",
      delay: 250
  });
  notify.animate([
    {
      opacity: "0"
    },
    {
      opacity: "1"
    }
  ],{
      duration: 500,
      easing: "ease-out",
      fill: "forwards",
      delay: 1500
  });
  notify.animate([
    {
      opacity: "1"
    },
    {
      opacity: "0.5"
    },
    {
      opacity: "1"
    }
  ],{
      duration: 1200,
      easing: "ease-in-out",
      iterations: Infinity,
      fill: "forwards",
      delay: 2000
  });
  return background;
}

function fullScreenNotificationClose() {
  let background = document.getElementById("fullScreenNotificationBackground");
  background.animate([
    {
      opacity: "1"
    },
    {
      opacity: "0"
    }
  ],{
      duration: 500,
      easing: "linear",
      fill: "forwards",
  });
  setTimeout(function(){document.body.removeChild(document.getElementById("fullScreenNotificationBackground"));},500);
}
// function clean(view, className){
//   for (var node of view.childNodes) {
//     if (node.className == className) {
//       if (Date.now() >= parseInt(node.getAttribute("expire"))) {
//         view.removeChild(node);
//         return;
//       }
//     }
//   }
// }
