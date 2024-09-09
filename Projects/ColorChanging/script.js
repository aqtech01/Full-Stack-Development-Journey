"use strict";
let intervalId;
let currentIndex = 0;

const randomColor = () => {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const bgColor = () =>
  (document.querySelector("body").style.backgroundColor = randomColor());
const changeColor = () => {
  if (!intervalId) {
    intervalId = setInterval(bgColor, 1000);
  }
};
const stopChangeColor = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};
document.querySelector("#start").addEventListener("click", changeColor);
document.querySelector("#stop").addEventListener("click", stopChangeColor);
