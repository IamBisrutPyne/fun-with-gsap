document.body.addEventListener("mousemove", e => {
    gsap.to(".circle", {
        x : e.clientX,
        y : e.clientY,
        stagger: -0.01,
    })
})
