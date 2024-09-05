"use strict";
const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

console.log(btn);
btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const key = e.target.id;
    switch (key) {
      case "grey":
        body.style.backgroundColor = "grey";

        break;
      case "white":
        body.style.backgroundColor = "white";

        break;
      case "blue":
        body.style.backgroundColor = "blue";

        break;
      case "blue":
        body.style.backgroundColor = "blue";

        break;
      case "yellow":
        body.style.backgroundColor = "yellow";

        break;
      default:
        break;
    }
  });
});
