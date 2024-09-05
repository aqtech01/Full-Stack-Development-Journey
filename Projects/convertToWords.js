"use strict";

const convertToWordsBelowTwenty = (num) => {
  let belowTwenty = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  if (num === 0) return "Zero";
  if (num >= 0 && num < 20) {
    return belowTwenty[num];
  }
};

const convertToWordBelowHundreds = (num) => {
  let tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  if (num < 20) {
    return convertToWordsBelowTwenty(num);
  }
  if (num < 100) {
    let tensPlace = Math.floor(num / 10);
    let units = num % 10;
    let result =
      units !== 0
        ? `${tens[tensPlace]} ${convertToWordsBelowTwenty(units)}`
        : tens[tensPlace];
    return result;
  }
};

const convertToWordBelowThousands = (num) => {
  if (num < 20) {
    return convertToWordsBelowTwenty(num);
  }
  if (num < 100) {
    return convertToWordBelowHundreds(num);
  }
  let hundredsPlace = Math.floor(num / 100);
  let units = num % 100;
  let result =
    units !== 0
      ? `${convertToWordsBelowTwenty(
          hundredsPlace
        )} hundred ${convertToWordBelowHundreds(units)}`
      : `${convertToWordsBelowTwenty(hundredsPlace)} hundred`;
  return result;
};

const convertToWordsHigherValue = (num) => {
  let thousands = ["", "thousand", "million", "billion"];

  let i = 0;
  let word = "";
  while (num > 0) {
    let units = num % 1000;
    if (units !== 0) {
      let unitValue = convertToWordBelowThousands(units);
      if (i > 0) {
        unitValue += ` ${thousands[i]}`;
      }
      if (word !== "") {
        word = unitValue + " " + word;
      } else {
        word = unitValue;
      }
    }
    num = Math.floor(num / 1000); // Corrected this line to update `num`
    i++;
  }
  return word.trim();
};

console.log(convertToWordsHigherValue(55555)); // Expected output: "fifty five thousand five hundred fifty five"
