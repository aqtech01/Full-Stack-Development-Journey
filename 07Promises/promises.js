// const promiseOne = new Promise((resolve, reject) => {
//   // Do as async Call;
//   // DBCalls, network
//   setTimeout(() => {
//     console.log("Async Complete ");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Promise Consumed");
// });

// promiseOne.then(() => {
//   console.log("Promise Consumed");
// });
// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "AQ", email: "abdulqadeer0120@gmail.com" });
//   }, 1000);
// }).then((user) => {
//   console.log(user);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "AQ", email: "abdulqadeer0120@gmail.com" });
//     } else {
//       reject("Error:Something went Wrong");
//     }
//   }, 200);
// });
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => console.log(username))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("The Promise is either resolved or rejected"));
// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "AQ", email: "abdulqadeer0120@gmail.com" });
//     } else {
//       reject("Error:Something went Wrong");
//     }
//   }, 200);
// });
// const consumePromiseFive = async () => {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
// consumePromiseFive();
// const getAllUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// };
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    const data = response.json();
    return data;
  })
  .then((response) => console.log(response))
  .catch(() => console.log("E: ", error));
