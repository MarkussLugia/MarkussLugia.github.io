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
                    transform: "scale(4.5,4.5) translate(" + offsetX/4.5 + "px," + offsetY/4.5 + "px)"
                }
            ],
            {
                duration: 600,
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