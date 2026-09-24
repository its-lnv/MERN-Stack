const studentName = "Rahul";
const rollNumber = 101;
const mathMarks = 85;
const scienceMarks = 78;
const englishMarks = 38;

const totalMarks = mathMarks + scienceMarks + englishMarks
const percentage = ((mathMarks + scienceMarks + englishMarks) / 300) * 100;
let grade;
let result;

if (mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40) {
    result = "Pass";
    if (percentage >= 90) {
        grade = "A";
    }
    else if (percentage >= 80) {
        grade = "B";
    }
    else if (percentage >= 70) {
        grade = "C";
    }
    else if (percentage >= 60) {
        grade = "D";
    }
    else if (percentage >= 40) {
        grade = "E";
    }
}
else {
    result = "Fail";
    grade = "F"
}

console.log("----------------------------");
console.log("       STUDENT RESULT       ");
console.log("----------------------------");
console.log("");
console.log("Name          :", studentName);
console.log("Roll No       :", rollNumber);
console.log("");
console.log("Math          :", mathMarks);
console.log("Science       :", scienceMarks);
console.log("English       :", englishMarks);
console.log("");
console.log("Total         :", totalMarks);
console.log("Percentage    :", percentage, "%");
console.log("Grade         :", grade);
console.log("Result        :", result);
console.log("");
console.log("----------------------------");