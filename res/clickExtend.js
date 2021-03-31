function clickExtend(element) {
    let parent = element.parentNode;
    if (parent.getAttribute("extended") != "True") {
        let rect = element.getBoundingClientRect();
        let centerX = rect.x + rect.width / 2;
        let centerY = rect.y + rect.height / 2;
        console.log(centerX + "," + centerY);
        let offsetX = window.innerWidth / 2 - centerX;
        let offsetY = window.innerHeight / 2 - centerY;
        console.log(window.innerWidth / 2 + "," + window.innerHeight / 2);
        console.log(offsetX + "," + offsetY);
        let parentRect = parent.getBoundingClientRect();
        parent.style.transformOrigin = (centerX - parentRect.x) + "px " + (centerY - parentRect.y) + "px";
        parent.animate(
            [
                {
                    transform: "scale(1,1) translate(0px,0px)"
                },
                {
                    transform: "scale(5,5) translate(" + offsetX/5 + "px," + offsetY/5 + "px)"
                }
            ],
            {
                duration: 500,
                easing:"ease-in-out",
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
                duration: 800,
                easing:"ease-out",
                fill:"forwards"
            }
        );
        parent.setAttribute("extended","False")
    }
}