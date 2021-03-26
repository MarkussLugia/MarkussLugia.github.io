//想要创建通知的话，调用这个函数就行。哦对了，别忘了带上配套的CSS文件
function fullScreenNotification(titleContent,textContent) {
  //如果有存在的通知则不执行
  if (document.getElementById("fullScreenNotificationBackground") != null) {
    return;
  }
  //创建背景
  let background = document.createElement("DIV");
  background.onclick = fullScreenNotificationClose;
  background.id = "fullScreenNotificationBackground";
  document.body.appendChild(background);
  // 创建定位盒
  let flexBox = document.createElement("DIV");
  flexBox.id = "fullScreenNotificationFlexBox";
  flexBox.className = "fullScreenNotificationCenterBox";
  background.appendChild(flexBox);
  //创建文本框
  let textBox = document.createElement("DIV");
  flexBox.appendChild(textBox);
  textBox.id = "fullScreenNotificationTextBox";
  textBox.className = "fullScreenNotificationCenterBox";
  //创建标题文本
  let title = document.createElement("H1");
  title.id = "fullScreenNotificationTitle";
  title.innerHTML = titleContent.toString().replaceAll("<br>", "\n").replaceAll("<", "&lt;").replaceAll("\n", "<br>");
  textBox.appendChild(title);
  let titleHeight = textBox.getBoundingClientRect().height;
  //创建内容文本
  let text = document.createElement("P");
  text.id = "fullScreenNotificationText";
  text.innerHTML = textContent.toString().replaceAll("<br>", "\n").replaceAll("<", "&lt;").replaceAll("\n", "<br>");
  textBox.appendChild(text);
  let fullHeight = textBox.getBoundingClientRect().height;
  //创建右下角文本
  let notify = document.createElement("B");
  notify.innerHTML = "单击以关闭";
  background.appendChild(notify);
  //创建WebAnimationAPI动画
  background.animate([
    {
      opacity: "0",
      backdropFilter: "blur(0px)"
    },
    {
      opacity: "1",
      backdropFilter: "blur(20px)"
    }
  ],{
      duration: 500,
      easing: "linear",
      fill: "forwards",
  });
  textBox.animate([
    {
      opacity: "0",
      height: "0",
      paddingTop: "0",
      paddingBottom: "0"
    },
    {
      opacity: "1",
      height: titleHeight + "px",
      paddingTop: "3vh",
      paddingBottom: "3vh"
    }
  ],{
      duration: 500,
      easing: "ease-out",
      fill: "forwards",
      delay: 250
  });
  textBox.animate([
    {
      height: titleHeight + "px"
    },
    {
      height: fullHeight + "px"
    }
  ],{
      duration: 600,
      easing: "ease-out",
      fill: "forwards",
      delay: 1000
  });
  text.animate([
    {
      opacity: "0"
    },
    {
      opacity: "1"
    }
  ],{
      duration: 300,
      easing: "linear",
      fill: "forwards",
      delay: 1000
  });
  notify.animate([
    {
      opacity: "0"
    },
    {
      opacity: "1"
    }
  ],{
      duration: 1000,
      easing: "ease-out",
      fill: "forwards",
      delay: 3000
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
      duration: 1800,
      easing: "ease-in-out",
      iterations: Infinity,
      fill: "forwards",
      delay: 4000
  });
  return background;
}

//调用这个函数可以关闭通知。一般来说，点击通知就会关闭......当然你也可以用别的方法调用
function fullScreenNotificationClose() {
  let background = document.getElementById("fullScreenNotificationBackground");
  background.animate([
    {
      opacity: "1",
      backdropFilter: "blur(20px)"
    },
    {
      opacity: "0",
      backdropFilter: "blur(0px)"
    }
  ],{
      duration: 250,
      easing: "ease-in",
      fill: "forwards",
  });
  setTimeout(function(){document.body.removeChild(background);},300);
}