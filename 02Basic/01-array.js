"use strict";
// const myArray = [1, 2, 3, 4, 5, 6];

// const marvelHeros = [
//   "Capitan America",
//   "Iron Man",
//   "Spider Man",
//   "Natasha Romanov",
//   "Hawk Eye",
// ];
// const dcHeros = [
//   "Super Man",
//   "Bat Man",
//   "Aqua Man",
//   "Wonder Women",
//   "The Flash",
// ];
// Array Methods
// console.log(marvelHeros);
// marvelHeros.push("Scarlet Witch");
// console.log(marvelHeros);
// console.log(dcHeros);
// dcHeros.push("Dead Pool");
// console.log(dcHeros);

// Shift And unshift // Add or Remove on start

// console.log(marvelHeros.includes("Thor"));
// console.log(marvelHeros.indexOf("Spider Man"));
// console.log("A", dcHeros);
// const newDcHeros = dcHeros.slice(1, 4);
// console.log(newDcHeros);
// console.log("B", dcHeros);

// console.log("A", dcHeros);
// const newDcHeros = dcHeros.splice(1, 4);
// console.log(newDcHeros);
// console.log("B", dcHeros);
// concat
// const allHeros = marvelHeros.concat(dcHeros);

// console.log(allHeros);

// Spread

// const allHeros = [...dcHeros, ...marvelHeros];
// console.log(allHeros);

// Flat Function in array

// console.log(dcHeros.flat(2));
// const marvelHeros = [
//   "Capitan America",
//   "Iron Man",
//   "Spider Man",
//   "Natasha Romanov",
//   "Hawk Eye",
// ];
// const dcHeros = [
//   "Super Man",
//   "Bat Man",
//   "Aqua Man",
//   "Wonder Women",
//   "The Flash",
// ];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multiplyByTwo = (numbers, index) => {
//   console.log(`Index is ${index}`);
//   console.log(`Multiple Number  is ${numbers * 2}`);
// };
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   multiplyByTwo(element, index);
// }

// const users = [{ name: "Abdul" }, { name: "Qadeer" }, { name: "Tanveer" }];
// users.forEach((user) => {
//   console.log(user.name);
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const numberFilter = numbers.sort((a, b) => a - b);
// const numberFilter = numbers.map(
//   (number, index) => `${number} Index: ${index}`
// );
// const numberFilter = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// const numberFilter = numbers.filter((number) => number > 5);
// console.log(numberFilter);

// const products = [
//   { ProductId: 1, productName: "p1", price: 100 },
//   { ProductId: 2, productName: "p2", price: 500 },
//   { ProductId: 3, productName: "p3", price: 4000 },
//   { ProductId: 4, productName: "p4", price: 1100 },
//   { ProductId: 5, productName: "p5", price: 10 },
// ];
// const checkPrice = products.every((pri) => pri.price < 10000);
// console.log(checkPrice);
// function isLength(string) {
//   return string.productName === "p1";
// }
// const findProduct = products.find(isLength);
// console.log(findProduct);
// const SortedPrice = products.sort((a, b) => a.price - b.price);
// console.log(SortedPrice);

// const numbers = [1, 2, 3, 4, 5, , 6, 7, 8, 9, 10];
// const checkEven = numbers.every((number) => number % 2 === 0);
// console.log(checkEven);
