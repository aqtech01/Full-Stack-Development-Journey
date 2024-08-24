"use strict";
const min = 10;
const max = 20;
const rand = Math.floor(Math.random() * (max - min + 1) + min);
let attempts = 0;
let guessCorrectly = false;

while (!guessCorrectly) {
  let userInput = Number(prompt("Enter a Number Between 10 to 20"));
  attempts++;

  // Check if the input is not a number or outside the desired range
  if (isNaN(userInput) && userInput < min && userInput > max) {
    console.log("Input is invalid. Please enter a number between 10 and 20.");
    continue; // Skip to the next iteration of the loop
  }

  if (userInput === rand) {
    console.log("You Win! It took you " + attempts + " attempt(s).");
    guessCorrectly = true;
  } else if (userInput > rand) {
    console.log("It's too high.");
  } else {
    console.log("It's too low.");
  }
}
