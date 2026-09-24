// console.log("Hello World"); 
// console.log(" 4 + 5 ");
// console.log("4 X 5 =", 4 * 5);

// age = 23;
// naam = "Laxmi";
// console.log(age, naam);

// var, let and const

// var age; // declaration -> box without val (duplicate karna)
// age = 23; // initialization -> box me val de di
// var age = 24; // both declaration and initialization

// var age = 23;
// console.log(age);

// var age = 24; //re-declaration
// age = 25 // updation
// console.log(age);

// let name = "laxmi";
// console.log(name);
// let name = "joker" // re-declaration not allowed
// name = "joker"; // updation allowed
// console.log(name);

// const aadharCard = 9876541;
// console.log(aadharCard);
// // const aadharCard = 736734298; // re-declaration not allowed
// aadharCard = 34848348; // updation not allowed
// console.log(aadharCard);

/*
Variable naming rules:
--> meaningful var name
--> var name must start with either a letter or an underscore or $ sign
--> reserved keywords ko v use nahi kar sakte
*/

// let $price = 5000;
// let _crazy = "laxmi";
// let age = 24;

/*
Data Types: 
1. Primitive:-
(i) number -> real numbers
(ii) string -> sequence of char
(iii) boolean -> true/false
(iv) null -> empty (intentionally)
(v) undefined -> value not given
(vi) bigint
(vii) symbol

2. Non-primitive
(i) object
(ii) array
(iii) function
*/

// let collegeName = "ANDC";
// let mobileNumber = 57897445699;
// let discount = 59.68;

// console.log(typeof collegeName);
// console.log(typeof discount);

// const userName = "Manu";
// // const greetingMessage = `Hi ${userName}`
// const greetingMessage = `Hi ${console.log("nested console")}`;
// console.log(greetingMessage);

// let user;
// console.log(user);  // undefined

// let products = null;
// console.log(products);
// console.log(typeof products);  // null

// let isAdult = true;
// console.log(typeof isAdult);