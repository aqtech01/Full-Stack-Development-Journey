"use strict";
// 1. Primitive Data Types
// Number
let a = 10;
console.log(a)
a = 20.5;
console.log(a)

// String
const name = "Abdul";
console.log(name);

// Boolean
const isValid = true;
console.log(isValid);
// Undefined
let b;
console.log(typeof (b));
// Null
let c = null;
console.log(typeof c);
// Symbol
let s = Symbol("Hello");
console.log(s.description);
console.log(s.valueOf());

console.log(typeof s);

// BigInt
let bi = BigInt(10);
console.log(bi.toLocaleString())
// 2. Non-Primitive Data Types
// Object
let obj = {
  name: "Abdul",
  age: 20,
  address: "Islamabad",
}
console.log(obj["name"].toUpperCase())
// Array
let arr = [1, 2, 3, 4, 5];
console.log(arr)

// Data Types Conversion
// Number to String
// let num = 10;
// console.log(typeof num);

// console.log(num.toString());
// console.log(typeof num)

let score = "100";
console.log(typeof score);
let num = Number(score);
console.log(typeof num);

// if number convert it convert it easily, if we add mix of number and string it convert it to NaN, 
// if convert string it convert NaN if we convert boolean it convert it to 1 or 0
// if we convert undefined it convert it to NaN,if we convert null it convert it to 0
// "12" => number
// "12a" => NaN
// "true" => 1
// "false" => 0
// "undefined" => NaN
// "null" => 0

// 33 => String(33)


