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

function isValidPassword(password, username) {
  if (password.length >= 8 && password != username && !password.includes(" ")) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidPassword("675password", "ben"));
