/*
Hoisting: Var and fun declaration top pe chale jaate hai and can be used before declaration and initialization
*/

// console.log(a);

// let a = 6;
// const a = 6;
// var a = 6;


// print()
// function print(){
//     console.log("Function declaration");
// }


// print1()
// var print1 = function() {
//     console.log("Function expression");
// }


/* How JS Code is executed 
1. Creation Phase (Memory allocation phase)
-> var gets memory, fun are stored (but they all are undefined)
2. Execution Phase:
-> value assign, clg, operations, fun invoke
*/


// var a = 5;
// let b = 7;

// function addNum() {
//     let a = 6;
//     console.log(a);
// }

// addNum()

/*
Var me memory allocation ke time by default undefined value assign ho jaati hai jabki let aur const me execution ke time value assign nahi hoti hai (value unavailable show hota hai) isliye let aur const hoisted hote hue v execution ke pehle access karne pe error dete hai
*/


/* Temporal Deadzone: Variable creation(declaration) se lekar initialization\ tak ka time */

// var x = 6;

// function random() {
//     console.log(x);
//     var x = 3;
// }

// random()

// let city = "Delhi";

// function printCity() {
//     console.log(city);
// }

// function random(fn) {
//     let city = "Varanasi";
//     fn(); // printCity()
// }

// random(printCity)


// function outer() {
//     function inner() {

//     };

//     return inner; // copy and return (function)
//     // return inner(); // return what inner is returning (undefined will be returned)
// }

/* Lexical scoping: kisi v block ke paas uske aur uske parent ki info hoti hai */
/* Lexical Environment: Inner function ke paas khud ke var ki info ke saath saath parent ke var ki info v hoti hai */

// function fun1() {
//     let username = "laxmi";

//     function fun2() {

//         function fun3() {

//             function fun4() {
//                 console.log(username);
                
//             };

//             fun4();

//         };

//         fun3();

//     };

//     fun2();


// };

// fun1()