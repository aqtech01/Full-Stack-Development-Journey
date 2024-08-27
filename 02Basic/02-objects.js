// "use strict";
const mySym = Symbol("Value Symbol");
// const JsUser = {
//   name: "Qadeer",
//   age: 23,
//   location: "Leeds",
//   email: "abdulqadeer@gmail.com",
//   isLoggedIn: false,
//   lastLoggedInDays: ["Monday", "Saturday"],
//   [mySym]: "my value 1",
//   greetings: function () {
//     console.log(`Welcome Back, ${this.name}`);
//   },
// };
// // console.log(JsUser.age);
// // console.log(JsUser["email"]);
// console.log(JsUser);
// JsUser.greetings();

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };
// const obj3 = { ...obj1, ...obj2 };
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));

// console.log(Object.keys(obj1));

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const JsUser = {
  name: "Qadeer",
  age: 23,
  location: "Leeds",
  email: "abdulqadeer@gmail.com",
  isLoggedIn: false,
  lastLoggedInDays: ["Monday", "Saturday"],
  [mySym]: "my value 1",
  greetings: function () {
    console.log(`Welcome Back, ${this.name}`);
  },
};
const { location: lc } = JsUser;
console.log(lc);
