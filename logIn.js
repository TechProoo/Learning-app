const back = document.querySelector(".i-c i");
const warning = document.querySelector(".warn span");
const form = document.querySelector("form");
const inputEmail = document.querySelector(".email");
const inputPass = document.querySelector(".pass");

const goBack = () => {
  back.addEventListener("click", () => {
    window.location.href = "index.html";
  });
};

const submitForm = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputEmail.value === "" || inputPass.value === "") {
      warning.style.display = "block";
      gsap.fromTo(".warn span", {
        y: -50,
        opacity: 0,
      }, {
        opacity: 1,
        y: 0,
        ease: "bounce",
        duration: 0.5,
      });

      setTimeout(() => {
        gsap.to(".warn span", {
          y: -50,
          opacity: 0,
          duration: 1,
          ease: "back.in(1.7)",
        });

      }, 2000);
    } else {
        window.location.href = "start.html"
    }
  });
};

submitForm();
goBack();

const fade = gsap.timeline();

fade.from("body", {
  x: 500,
  opacity: 0,
  duration: 1.5,
});
fade.from(".btn-log button", {
  y: 50,
  opacity: 0,
  ease: "bounce",
  duration: 1,
});
fade.from(".bn", {
  y: -50,
  opacity: 0,
  ease: "bounce",
  duration: 1,
});
