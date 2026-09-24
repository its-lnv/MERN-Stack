// Functions

/*
Function agar kuch return na kare to print karane pe undefined aata hai
*/

function totalMarks (studentName, sanskritMarks, mathMarks, scienceMarks) {
    console.log(`${studentName} total marks: ${sanskritMarks + mathMarks + scienceMarks}`);
}

// totalMarks ("Alok", 46, 56, 23)

// function greetingMessage(name = "Guest", greet = "Hello") {
//     console.log(`${greet}, ${name}`);
// }

// greetingMessage("Rahul", "Hi")
// greetingMessage("Karana")
// greetingMessage()

// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
//             break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
//             break;
//         case "*":
//             console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
//             break;
//         case "/":
//             if (num2 !== 0) {
//                 console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
//             }
//             else {
//                 console.log("Invalid division");
//             }
//             break;
//         default:
//             console.log("Invalid operator");
//             break;
//     }
// }

// calculator(2, 0, "%")

function totalMarks (sanskritMarks, mathMarks, scienceMarks) {
    return sanskritMarks + mathMarks + scienceMarks;
}

function calPercentage(studentName, sanskritMarks, mathMarks, scienceMarks) {
    return (`${studentName} percentage: ${((totalMarks(sanskritMarks, mathMarks, scienceMarks) / 300) * 100).toFixed(2)}`)
}

// console.log(calPercentage("Alok", 46, 56, 23));
// console.log(calPercentage("Sachin", 56, 89, 36));
// console.log(calPercentage("Prakash", 85, 25, 69));



// After array class

let students = [["Alok", 46, 56, 23], ["Sachin", 56, 89, 36], ["Prakash", 85, 25, 69]]

for (let i = 0; i < students.length; i++) {
    console.log(calPercentage(students[i][0], students[i][1], students[i][2], students[i][3]));
}

/*Function Declaration vs Function Expression */
// fun1()
// function fun1() {
//     console.log("Function Declaration");
// }

// let fun2 = function () {
//     console.log("Function Expression");
// }

// fun2()


/* Arrow Function */
// let add = num1 => num1 + 4; // if only 1 var is used & there is only one simple operation aur isme return hai par hidden hai

// let add = (num1, num2) => num1 + num2; // if there is only one simple operation aur isme return hai par hidden hai

// let add = (num1, num2) => {
//     // Many lines of code
//     return num1 + num2;
// }

// console.log(add(4, 5));