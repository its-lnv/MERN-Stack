/*
Operators -> do perform operations b/w 2 operands
1. Arithmetic -> +, -, *, /, %, **
increment -> ++
decrement -> --
*/

// let num1 = 2;
// let num2 = 3;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);

// let num = 45;
// // num++;   
// // ++num;
// console.log(++num); // 46 -> pre-increment
// console.log(num++); // 46 -> post-incremnt
// console.log(num); // 47

// let num = 45;
// console.log(--num); // 44 -> pre-decrement
// console.log(num--); // 44 -> post-decrement
// console.log(num); // 43

/* 
Assignment Operator (=, +=, -=, *=, /=, %=, **=)
*/

// let num = 2;
// num += 5
// console.log(num);
// num -= 5;
// console.log(num);
// num *= 5;
// console.log(num);
// num /= 5;
// console.log(num);
// num %= 5;
// console.log(num);
// num **= 5;
// console.log(num);


/*
Comparison Operator (>, <, >=, <=, ==, ===, !==) -> always return boolean
== -> loose equality (value must be same but data type is not checked)
=== -> strict equality (value and data type must be same)
*/


// const num1 = 3;
// const num2 = 6;

// console.log(3 > 6); // false
// console.log(3 < 6); // true
// console.log(3 >= 6); // false
// console.log(3 <= 6); // true
// console.log(3 == 6); // false
// console.log(3 != 6); // true


// console.log("5" == 5); // true
// console.log("5" === 5); // false


/*
Logical Operators (&&, ||, !)
*/


// const age = 17;
// const hasId = true;

// const canEnterClub = age >= 18 && hasId === true;
// console.log(canEnterClub);

// console.log(!true);
// console.log(!56);


/*
truthy and falsy:
falsy -> (0, "", null, undefined, NaN, false) -> by default false hote hai
truthy -> everything except falsy is by default true
*/

// console.log("manish" / 60); // NaN
// console.log(typeof NaN);


// else-if

// const isLoggedIn = false;

// if (isLoggedIn === true) {
//     console.log("Like and Comment");
// }
// else {
//     console.log("Login first"); 
// }

// const day = "fri"

// if (day == "mon") {
//     console.log("1st day of week");
// }
// else if (day == "tue") {
//     console.log("2nd day of week");
// }
// else if (day == "wed") {
//     console.log("3rd day of week");
// }
// else if (day == "thu") {
//     console.log("4th day of week");
// }
// else if (day == "fri") {
//     console.log("5th day of week");
// }
// else if (day == "sat") {
//     console.log("6th day of week");
// }
// else if (day == "sun") {
//     console.log("7th day of week");
// }
// else {
//     console.log("Wrong day");

// }


// const isLoggedIn = true;
// const isSubscribed = false;

// if (isLoggedIn) {
//     if (isSubscribed) {
//         console.log("Can access premium content");
//     }
//     else {
//         console.log("You don't have premium plan to access this content");
//     }
// }
// else {
//     console.log("Please log-in first");  
// }


// switch case
// const day = "mo";

// switch (day) {
//     case "mon":
//         console.log("1st day of the week");
//         break;
//     case "tue":
//         console.log("2nd day of the week");
//         break;
//     case "wed":
//         console.log("3rd day of the week");
//         break;
//     case "thu":
//         console.log("4th day of the week");
//         break;
//     case "fri":
//         console.log("5th day of the week");
//         break;
//     case "sat":
//         console.log("6th day of the week");
//         break;
//     case "sun":
//         console.log("7th day of the week");
//         break;
//     default:
//         console.log("Wrong day");
// }
