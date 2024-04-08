const cover = document.querySelector(".bg-cover")

const fade = gsap.timeline()

fade.from(".logo", {
    y: -50,
    opacity: 0,
    ease: "back.out(4)",
    duration: 2
})
fade.to(".bg-cover", {
    x: -500,
    opacity: 0,
    duration: 1.5,
    delay: 2,
    borderRadius: '100%',
})
