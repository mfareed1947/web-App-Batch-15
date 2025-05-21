console.log("first");

//task

//1 write a func
//2 array of obj ✅
//2a {
//     name,
//     course,
//     entolldate
// } ✅

// 3 switch case
// 4 if else start < 30 10% disc
// 5 string method for capt
// 6 date method date cal

// 7 array method

const students = [
  {
    name: "ali",
    course: "web development",
    enrollmentDate: "03-23-2025",
  },
  {
    name: "ahmed",
    course: "web development",
    enrollmentDate: "03-03-2025",
  },
  {
    name: "raza",
    course: "amazon",
    enrollmentDate: "01-23-2025",
  },
  {
    name: "sufyan",
    course: "graphic design",
    enrollmentDate: "03-23-2025",
  },
  {
    name: "saad",
    course: "Data Science",
    enrollmentDate: "04-01-2025",
  },
];

const capitalizeWord = (word) => {
  const breakWord = word.split(" ");
  const data = breakWord.map((currElem) => {
    return currElem.charAt(0).toUpperCase() + currElem.slice(1);
  });
  return data.join(" ");
};

const studentsEnrollemnt = (students, startDateOfCourses) => {
  const startDate = new Date(startDateOfCourses);

  const result = students.map((studentData) => {
    let fees = 0;
    switch (studentData.course.toLowerCase()) {
      case "web development":
        fees = 200;
        break;
      case "graphic design":
        fees = 150;
        break;
      case "data science":
        fees = 250;
        break;
      case "amazon":
        fees = 350;
        break;

      default:
        console.warn("invalid course");
        break;
    }
    let enrollDate = new Date(studentData.enrollmentDate);
    console.log(startDate - enrollDate);
    let diffDate = Math.ceil((startDate - enrollDate) / (1000 * 60 * 60 * 24));
    // console.log(diffDate);
    if (diffDate > 30) {
      const disc = fees * 0.1;
      fees = fees - disc;
    }

    formatedName = capitalizeWord(studentData.name);
    formatedCourseName = capitalizeWord(studentData.course);

    const currentDate = new Date();
    const duration = Math.ceil(
      (currentDate - enrollDate) / (1000 * 60 * 60 * 24)
    );

    return {
      studentName: studentData.name,
      enrollmentFees: `$${fees.toFixed(2)}`,
      durationOfCourse: `${duration} ago`,
    };
  });

  return result;
};

const result = studentsEnrollemnt(students, "04-01-2025");
console.log(result);
