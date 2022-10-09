// const scores = [98, 65, 77, 82, 23, 55];

// for (let i = 0; i < scores.length; i++) {
//   console.log(i, scores[i]);
// }

const students = [
  {
    firstName: "Zeus",
    score: 86,
  },
  {
    firstName: "Artemis",
    score: 95,
  },
  {
    firstName: "Hera",
    score: 72,
  },
  {
    firstName: "Apollo",
    score: 90,
  },
];

for (let i = 0; i < students.length; i++) {
  //   console.log(`${students[i].firstName} has a score of ${students[i].score}`);
  if (students[i].score < 90) {
    console.log(`${students[i].firstName} needs to retake the test`);
  } else {
    console.log(`${students[i].firstName} passed!`);
  }
}
