const std1Name = "ali";
const std1Id = "12";
const std1Dept = "CS";
const std1Sem = 6;

const std2Name = "ahmed";
const std2Id = "122";
const std2Dept = "SE";
const std2Sem = 4;

const std3Name = "bilal";
const std3Id = "34";
const std3Dept = "SE";
const std3Sem = 7;

// class Student {
//   name = "";
//   id = "";
//   dept = "";
//   semster = "";
//   constructor(name, id, dept, sem) {
//     name = name;
//     id = id;
//     dept = dept;
//     this.semster = sem;
//   }
// }

// let studentOne = new Student("ali", "23", "CS", 5);
// let studentTwo = new Student("ali", "23", "CS", 5);

let student = {
  name: "ali",
  id: "23",
  dept: "CS",
  sems: 5,
};
let studentTwo = {
  name: "ali",
  id: "23",
  dept: "CS",
  sems: 5,
};

let car = {
  color: "red",
  model: "2025",
  companyName: "honda",
  speed: 1800,
  type: ["hybrid", "non-hybrid"],
  bodyType: {
    bumper: 2,
    lights: 6,
    tyres: 4,
  },
  open: () => {
    return console.log("first", this.speed);
  },
};

// console.log(car);

// car.color = "white";
// car.registrationDate = 2021;

const students = [
  {
    name: "ali",
    id: 1,
    age: 19,
  },
  {
    name: "ahmed",
    id: 2,
    age: 21,
  },
  {
    name: "nawaz",
    id: 3,
    age: 22,
    gender: "male",
  },
];

var userId = prompt("enter your id");

console.log(students.find((data) => data.id == userId));
