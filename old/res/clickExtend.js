function clickExtend(element, parent, root) {
    if (parent.getAttribute("extended") != "True" && element != null) {
        let rect = element.getBoundingClientRect();
        let rootRect = root.getBoundingClientRect();
        let centerX = rect.x + rect.width / 2;
        let centerY = rect.y + rect.height / 2;
        let offsetX = rootRect.width / 2 - centerX + rootRect.x;
        let offsetY = rootRect.height / 2 - centerY + rootRect.y;
        let parentRect = parent.getBoundingClientRect();
        parent.style.transformOrigin = (centerX - parentRect.x) + "px " + (centerY - parentRect.y) + "px";
        Array.from(document.getElementsByClassName("empty")).forEach(element => {
          element.style.backgroundImage = "url(res/SiltraAndHorobPaintGif.png)";
          element.style.backgroundSize = "cover";
          element.getAnimations({ subtree: true }).forEach(animation =>{
              animation.pause();
          });
        });
        parent.animate(
            [
                {
                    transform: "scale(1,1) translate(0px,0px)"
                },
                {
                    transform: "scale(1.3,1.3) translate(" + offsetX/12 + "px," + offsetY/12 + "px)",
                    offset:0.1
                },
                {
                    transform: "scale(1.6,1.6) translate(" + offsetX/8 + "px," + offsetY/8 + "px)",
                    offset:0.2
                },
                {
                    transform: "scale(2.2,2.2) translate(" + offsetX/5.6 + "px," + offsetY/5.6 + "px)",
                    offset:0.4
                },
                {
                    transform: "scale(2.8,2.8) translate(" + offsetX/4.8 + "px," + offsetY/4.8 + "px)",
                    offset:0.6
                },
                {
                    transform: "scale(3.4,3.4) translate(" + offsetX/4.4 + "px," + offsetY/4.4 + "px)",
                    offset:0.8
                },
                {
                    transform: "scale(4,4) translate(" + offsetX/4 + "px," + offsetY/4 + "px)"
                }
            ],
            {
                duration: 600,
                easing:"ease-out",
                fill:"forwards"
            }
        );
        parent.setAttribute("extended","True");
        document.getElementById("channelViewBackground").animate(
            [
                {
                    zIndex: 16
                },
                {
                    opacity: 0,
                    offset: 0.001
                },
                {
                    opacity: 1,
                    offset: 0.7
                },
                {
                    zIndex: 16,
                    opacity: 1
                }
            ],
            {
                duration: 700,
                easing:"ease-out",
                fill:"forwards"
            }
        );
        document.getElementById("channelView").animate(
            [
                {
                    top: rect.y - rootRect.y + "px",
                    left: rect.x - rootRect.x + "px",
                    width: rect.width + "px",
                    height: rect.height + "px",
                    opacity: 0,
                },
                {
                    top: "2.5%",
                    left: "2%",
                    width: "96%",
                    height: "95%",
                    opacity: 1
                }
            ],
            {
                duration: 700,
                easing:"ease-out",
                fill:"forwards"
            }
        );
        document.getElementById("channelView").setAttribute("rtop", rect.y - rootRect.y);
        document.getElementById("channelView").setAttribute("rleft", rect.x - rootRect.x);
        document.getElementById("channelView").setAttribute("rwidth", rect.width);
        document.getElementById("channelView").setAttribute("rheight", rect.height);
    }
    else{
        Array.from(document.getElementsByClassName("empty")).forEach(function(element){
          element.removeAttribute("style");
          element.getAnimations({ subtree: true }).forEach(animation =>{
              animation.play();
          });
        });
        parent.animate(
            [
                {
                    transform: ""
                },
                {
                    transform: "scale(1,1) translate(0px,0px)"
                }
            ],
            {
                duration: 500,
                easing:"ease-out",
                fill:"forwards"
            }
        );
        document.getElementById("channelViewBackground").animate(
            [
                {
                    zIndex: 16,
                    opacity: 1
                },
                {
                    opacity: 0.5,
                    offset: 0.8
                },
                {
                    opacity: 0,
                    offset: 0.999
                },
                {
                    zIndex: -1,
                }
            ],
            {
                duration: 420,
                easing:"ease-out",
                fill:"forwards"
            }
        );
        document.getElementById("channelView").animate(
            [
                {
                    width: "96%",
                    height: "95%",
                    opacity: 1
                },
                {
                    opacity:0,
                    offset:0.75
                },
                {
                    width: document.getElementById("channelView").getAttribute("rwidth") + "px",
                    height: document.getElementById("channelView").getAttribute("rheight") + "px",
                    opacity: 0
                }
            ],
            {
                duration: 420,
                easing:"ease-out",
                fill:"forwards"
            }
        );
        document.getElementById("channelView").animate(
            [
                {
                    top: "2.5%",
                    left: "2%",
                },
                {
                    top: document.getElementById("channelView").getAttribute("rtop") + "px",
                    left: document.getElementById("channelView").getAttribute("rleft") + "px",
                }
            ],
            {
                duration: 400,
                easing:"ease-out",
                fill:"forwards"
            }
        );
        parent.setAttribute("extended","False")
    }
}