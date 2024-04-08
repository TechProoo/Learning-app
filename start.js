const back = document.querySelector(".i-c i");
const warning = document.querySelector(".warn span");
const form = document.querySelector("form");
const inputEmail = document.querySelector(".email");
const inputPass = document.querySelector(".pass");

const goBack = () => {
  back.addEventListener("click", () => {
    window.location.href = "logIn.html";
  });
};


goBack();

const fade = gsap.timeline();

fade.from("body", {
  x: 500,
  opacity: 0,
  duration: 1,
  ease: "back"
});
fade.from(".btn-cont", {
    y: -50,
    opacity: 0,
    ease: "bounce",
    duration: 1,
})

