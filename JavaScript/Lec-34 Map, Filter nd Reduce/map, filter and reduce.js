// let originalPrices = [4363, 112, 3698]
// let discountPrices = []

// for (value of originalPrices) {
//     // let discount = value * 10/100;
//     // discountPrices.push(value - discount);

//     discountPrices.push(value * 0.9);
// }

// console.log(originalPrices);
// console.log(discountPrices);


// originalPrices.forEach((value) =>{
//     discountPrices.push(value * 0.9);
// })

// console.log(discountPrices);



/* Map(): Map is used when we have to perform any operation on every ele of the arr and returns a new arr */
// const discountPrices2 = originalPrices.map((value) => value * 0.9;);

// console.log(discountPrices2);

let students = [
    {
        name: "Aayan",
        marks: 10
    },

    {
        name: "Riya",
        marks: 51
    },

    {
        name: "Mansi",
        marks: 76
    },

    {
        name: "Auranga",
        marks: 28
    }
]

// let studentsName = []

// students.forEach((value) => {
//     studentsName.push(value.name)
// });

// console.log(studentsName);

// const studentsName = students.map((student) => student.name);
// const studentsMarks = students.map((student) => student.marks);
// const boostedMarks = students.map(student => ({...student, marks: student.marks + 10}))

// console.log(studentsName);
// console.log(studentsMarks);
// console.log(boostedMarks);


/* Filter: ye n length ka arr leta hai aur 0-n length ka arr return karta hai aur iska use unwanted chizo ko filter out karne ke liye karte hai*/

// const failedStudents = []

// students.forEach((student) => {
//     if (student.marks < 33) {
//         failedStudents.push(student)
//     }
// })

// console.log(failedStudents)


// const failedStudents = students.filter(student => student.marks < 33).map(student => student.name) 

// console.log(failedStudents);




/* Reduce: It takes arr of n length and return single value (num, booloean, arr or obj) */
// let marks = [18, 95, 78, 52, 69]

// const totalMarks = marks.reduce((totalMarks, mark) => totalMarks + mark, 0) // here 0 is initial value that is assigned to accumulator

// console.log(totalMarks);


// const totalMarks = students.reduce((totalMarks, student) => totalMarks + student.marks, 0)
// console.log(totalMarks);


// const attendance = ["present", "present", "absent", "present", "absent"];

// let obj = {}

// attendance.forEach(status => {
//     if (obj[status]) {
//         obj[status] += 1;
//     }
//     else {
//         obj[status] = 1
//     }
// })

// const obj = attendance.reduce((acc, val) => {
//     if (acc[val]) {
//         acc[val] += 1;
//     }
//     else {
//         acc[val] = 1;
//     }
//     return acc;
// }, {});

// console.log(obj);
