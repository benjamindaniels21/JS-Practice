// const scores = [98, 65, 77, 82, 23, 55];

// for (let i = 0; i < scores.length; i++) {
//   console.log(i, scores[i]);
// }

// const students = [
//   {
//     firstName: "Zeus",
//     score: 86,
//   },
//   {
//     firstName: "Artemis",
//     score: 95,
//   },
//   {
//     firstName: "Hera",
//     score: 72,
//   },
//   {
//     firstName: "Apollo",
//     score: 90,
//   },
// ];

// for (let i = 0; i < students.length; i++) {
//   //   console.log(`${students[i].firstName} has a score of ${students[i].score}`);
//   if (students[i].score < 90) {
//     console.log(`${students[i].firstName} needs to retake the test`);
//   } else {
//     console.log(`${students[i].firstName} passed!`);
//   }
// }

//dice roll

// let guess = Math.floor(Math.random() * 6);
// let number = Math.floor(Math.random() * 6);

// const rollDice = () => {
//   console.log(`The computer rolled ${number} and you guessed ${guess}`);

//   if (number === guess) {
//     console.log("you win!");
//   } else {
//     console.log("guess again!");
//     guess = Math.floor(Math.random() * 6);
//     rollDice();
//   }
// };

// rollDice();

//Greeting
// const greeting = (name) => {
//   console.log(`Hello, ${name}.`);
// };

// greeting("Benny Boy");

//Password Validator

// function isValidPassword(password, username) {
//   if (
//     password.length >= 8 &&
//     !password.includes(" ") &&
//     password.indexOf(username) == -1
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isValidPassword("675password", "username194934"));

//Average array of numbers

// const avgArray = (numArray) => {
//   let avg = 0;
//   for (let num of numArray) {
//     avg += num;
//   }
//   avg = avg / numArray.length;
//   console.log(avg);
// };

// avgArray([0, 2, 5, 6]);

//Pangram checker (sentence that contains every letter in the alphabet)

// function isPangram(sentence) {
//   sentence = sentence.toLowerCase();
//   if (
//     sentence.includes(
//       "a" &&
//         "b" &&
//         "c" &&
//         "d" &&
//         "e" &&
//         "f" &&
//         "g" &&
//         "h" &&
//         "i" &&
//         "j" &&
//         "k" &&
//         "l" &&
//         "m" &&
//         "n" &&
//         "o" &&
//         "p" &&
//         "q" &&
//         "r" &&
//         "s" &&
//         "t" &&
//         "u" &&
//         "v" &&
//         "w" &&
//         "x" &&
//         "y" &&
//         "z"
//     )
//   ) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// isPangram("Nymphs blit quick ve dwarf jo");

//Draw a random card challenge

// const suits = ["spades", "hearts", "clubs", "diamonds"];
// const cardVal = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
// const card = {};

// const randomCard = () => {
//   const randomSuit = suits[Math.floor(Math.random() * suits.length)];
//   const randomCardVal = cardVal[Math.floor(Math.random() * cardVal.length)];
//   card.suit = randomSuit;
//   card.value = randomCardVal;
//   console.log(card);
// };

// randomCard();

//Check if value is between 2 numbers

// function makeBetweenFunc(x, y) {
//   return function (num) {
//     return num >= x && num <= y;
//   };
// }

// const isChild = makeBetweenFunc(0, 18);

// const isInNineties = makeBetweenFunc(1990, 1999);

// const isNiceWeather = makeBetweenFunc(60, 79);

// console.log(isChild(19));

// const grumpy = function () {
//   alert("Get off my lawn!");
// };

// const btn = document.querySelector("button");

// btn.addEventListener("click", grumpy);

//----Array.map() challenges----

//----Array Squared...return the squared value of each number---

// const input = [1, 2, 3, 4, 5];

// const squared = input.map((num) => num * num);

// console.log(squared);

//---Sum of all positive array numbers---

// const input = [1, -4, 12, 0, -3, 29, -150];
// let sum = 0;

// const sumPos = input.map((num) => {
//   if (num > 0) {
//     sum += num;
//   } else {
//     return;
//   }
// });

// console.log(sum);

// const numberArray = [40, 1, 5, 200];

// function compareNumbers(a, b) {
//   return a - b;
// }

// console.log(compareNumbers("400", "10"));

//----Reduce---

//---find product of all vals of an array---

const nums = [3, 4, 5, 6, 7];

const newNums = nums.reduce((prevVal, currentVal) => prevVal * currentVal);

console.log(newNums);
