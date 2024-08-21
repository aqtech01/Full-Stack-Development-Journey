// "use strict";
// // 1. Primitive Data Types
// // Number
// let a = 10;
// console.log(a)
// a = 20.5;
// console.log(a)

// // String
// const name = "Abdul";
// console.log(name);

// // Boolean
// const isValid = true;
// console.log(isValid);
// // Undefined
// let b;
// console.log(typeof (b));
// // Null
// let c = null;
// console.log(typeof c);
// // Symbol
// let s = Symbol("Hello");
// console.log(s.description);
// console.log(s.valueOf());

// console.log(typeof s);

// // BigInt
// let bi = BigInt(10);
// console.log(bi.toLocaleString())
// // 2. Non-Primitive Data Types
// // Object
// let obj = {
//   name: "Abdul",
//   age: 20,
//   address: "Islamabad",
// }
// console.log(obj["name"].toUpperCase())
// // Array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr)

// // Data Types Conversion
// // Number to String
// // let num = 10;
// // console.log(typeof num);

// // console.log(num.toString());
// // console.log(typeof num)

// let score = "100";
// console.log(typeof score);
// let num = Number(score);
// console.log(typeof num);

// // if number convert it convert it easily, if we add mix of number and string it convert it to NaN, 
// // if convert string it convert NaN if we convert boolean it convert it to 1 or 0
// // if we convert undefined it convert it to NaN,if we convert null it convert it to 0
// // "12" => number
// // "12a" => NaN
// // "true" => 1
// // "false" => 0
// // "undefined" => NaN
// // "null" => 0

// // 33 => String(33)


// // Operation
// let str1 = "Hello";
// let str2 = " Qadeer";
// let str3 = str1 + str2;
// // console.log(str3);
// // console.log("1" + 2);
// // console.log(1 + "2");

// // console.log("1" + 2 + 3);
// // console.log(1 + 2 + "3");


// Data Types Summary

// 1. Primitive Data Types
// Number
const age = 23;
// String
const name = "Abdul Qadeer";
// Boolean
const isTrue = false;
// Undefined
let undefinedVar;
// Null
let nullVar = null;
// Symbol
let sym = Symbol("Hello");
let sym2 = Symbol("Hello");
console.log(sym === sym2);
console.log(sym2);


// BigInt
// 2. Non-Primitive Data Types
// Object
const heros = {
  marvel: ["Iron Man", "Captain America", "Thor"],
  dc: ["Batman", "Superman", "Flash"],

}
console.log(heros.marvel[1])
// Array
// Function
const func = () => {

}
console.log(typeof func)
// Date
