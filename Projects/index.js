// "use strict";
// const ones = {
//   0: "zero",
//   1: "one",
//   2: "two",
//   3: "three",
//   4: "four",
//   5: "five",
//   6: "six",
//   7: "seven",
//   8: "eight",
//   9: "nine",
// };
// const teens = {
//   10: "ten",
//   11: "eleven",
//   12: "twelve",
//   13: "thirteen",
//   14: "fourteen",
//   15: "fifteen",
//   16: "sixteen",
//   17: "seventeen",
//   18: "eighteen",
//   19: "nineteen",
// };
// const tens = {
//   20: "twenty",
//   30: "thirty",
//   40: "forty",
//   50: "fifty",
//   60: "sixty",
//   70: "seventy",
//   80: "eighty",
//   90: "ninety",
// };
// const hundreds = {
//   100: "one hundred",
//   200: "two hundred",
//   300: "three hundred",
//   400: "four hundred",
//   500: "five hundred",
//   600: "six hundred",
//   700: "seven hundred",
//   800: "eight hundred",
//   900: "nine hundred",
// };

// function numberToWords(num) {
//   if (num >= 0 && num <= 9) {
//     console.log(ones[num]);
//   } else if (num >= 10 && num <= 19) {
//     console.log(teens[num]);
//   } else if (num >= 20 && num <= 99) {
//     let tensPlace = Math.floor(num / 10) * 10;
//     let unit = num % 10;
//     if (unit === 0) {
//       console.log(tens[num]);
//     } else {
//       console.log(tens[tensPlace], "-", ones[unit]);
//     }
//   }
// }
// let number = 31;
// numberToWords(number);

// // function numberToWords(num) {
//   if (num === 0) return "zero";

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

function convertToWords(n) {
  if (n < 0) return "Enter Positive Value";
  if (n === 0) return "Zero";
  if (n < 20) return belowTwenty[n];
  if (n < 100) {
    let tensPlace = Math.floor(n / 10);
    let units = n % 10;

    if (units === 0) {
      return tens[tensPlace];
    } else {
      return `${tens[tensPlace]} ${belowTwenty[units]}`;
    }
  }
  if (n < 1000) {
    let hundredsPlace = Math.floor(n / 100); // Get the hundreds digit
    let units = n % 100; // Get the remainder

    if (units === 0) {
      return `${belowTwenty[hundredsPlace]} hundred`;
    } else {
      return `${belowTwenty[hundredsPlace]} hundred ${convertToWords(units)}`;
    }
  }

  // For numbers 1000 and above
  let word = "";
  let i = 0;
  while (n > 0) {
    let units = n % 1000;
    if (units !== 0) {
      let unitsValue = convertToWords(units);
      if (i > 0) {
        unitsValue += ` ${thousands[i]}`;
      }

      if (word !== "") {
        word = unitsValue + " " + word;
      } else {
        word = unitsValue;
      }
    }
    n = Math.floor(n / 1000);
    i++;
  }
  return word;
}

console.log(convertToWords(25555466)); // Expected output: "twenty-five thousand five hundred fifty-five"

// return tens[
//   Math.floor(n / 10) + (n % 10 !== 0 ? "-" + belowTwenty[n % 10] : "")
// ];
//  }

//   function convertToWords(n) {
//     if (n < 20) return belowTwenty[n];
//     if (n < 100)
//       return (
//         tens[Math.floor(n / 10)] +
//         (n % 10 !== 0 ? "-" + belowTwenty[n % 10] : "")
//       );
//     if (n < 1000)
//       return (
//         belowTwenty[Math.floor(n / 100)] +
//         " hundred" +
//         (n % 100 !== 0 ? " " + convertToWords(n % 100) : "")
//       );
//     return "";
//   }

//   let word = "";
//   let i = 0;

//   while (num > 0) {
//     if (num % 1000 !== 0) {
//       word =
//         convertToWords(num % 1000) +
//         (i > 0 ? " " + thousands[i] : "") +
//         (word !== "" ? " " + word : "");
//     }
//     num = Math.floor(num / 1000);
//     i++;
//   }

//   return word;
// }

// console.log(numberToWords(40));
