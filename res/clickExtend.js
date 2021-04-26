function clickExtend(element, parent, root) {
    if (parent.getAttribute("extended") != "True") {
        let rect = element.getBoundingClientRect();
        let rootRect = root.getBoundingClientRect();
        let centerX = rect.x + rect.width / 2;
        let centerY = rect.y + rect.height / 2;
        let offsetX = rootRect.width / 2 - centerX + rootRect.x;
        let offsetY = rootRect.height / 2 - centerY + rootRect.y;
        let parentRect = parent.getBoundingClientRect();
        parent.style.transformOrigin = (centerX - parentRect.x) + "px " + (centerY - parentRect.y) + "px";
        parent.animate(
            [
                {
                    transform: "scale(1,1) translate(0px,0px)"
                },
                {
                    transform: "scale(1.35,1.35) translate(" + offsetX/11 + "px," + offsetY/11 + "px)",
                    offset:0.1
                },
                {
                    transform: "scale(1.7,1.7) translate(" + offsetX/8 + "px," + offsetY/8 + "px)",
                    offset:0.2
                },
                {
                    transform: "scale(2.4,2.4) translate(" + offsetX/5.6 + "px," + offsetY/5.6 + "px)",
                    offset:0.4
                },
                {
                    transform: "scale(3.1,3.1) translate(" + offsetX/4.8 + "px," + offsetY/4.8 + "px)",
                    offset:0.6
                },
                {
                    transform: "scale(4,4) translate(" + offsetX/4 + "px," + offsetY/4 + "px)"
                }
            ],
            {
                duration: 800,
                easing:"ease-out",
                fill:"forwards"
            }
        );
        parent.setAttribute("extended","True")
    }
    else{
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
                duration: 400,
                easing:"ease-out",
                fill:"forwards"
            }
        );
        parent.setAttribute("extended","False")
    }
}