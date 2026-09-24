
// console.log(a);   // undefined ==> kyuki creation ke time a ko undefined de di jaati hai as default
// var a = 6;


// console.log(b);  // error ==> kyuki creation ke time koi value nahi di jaati
// const b = 6;

// fun1();  // result printed ==> kyuki creation ke time hee poora function copy ho jaata hai
// function fun1() {
//     console.log("Function 1");
// };

// fun2();  // not a function ==> kyuki yaha pe fun2:undefined hogi aur hum fun call me undefined() ko call kar rahe hai aur chuki undefined fun nahi hai isliye type error aayega
// var fun2 = function() {
//     console.log("Function 2");
// }

// fun3();  //cannot access before initialization ==> kyuki let/const me hum TDZ ke wajah se initialization se pehle value print nahi kar sakte
// const fun3 = function() { 
//     console.log("Function 3");
// };


/* How JS execute internally 
Execution Context: Ye ek environment hota hai jaha JS execute hoti hai.

Ye do types ka hota hai
1. Global execution context: One time creation
2. Function execution context: Create on every function call

Har type ke andar do phases hoti hai
1. Creation phase: Isme memory creation/allocation hota hai. Isme bas variables declare hoti hai
Ex- var a; let b; const c; function fun1() {}; var fun2 = function() {}; let fun3 = () => {};

===> Memory allocation key:value format me hota hai

1. var a = 9;  ===> a:undefined (value is initialized with undefined in var)

2. let b = 10; const c = 11;  ===> b:<value_unavailable>; c:<value_unavailable> (value is uninitialized in let/const)

3. function fun1() {};  ===> fun1():{} (incase of fun declaration entire fun is stored in memory)

4. var fun2 = function() {}; var fun2 = () => {};  ===> fun2:undefined (exactly same as var variable)

5. var fun3 = function() {}; var fun3 = () => {};  ===> fun3:<value_unavailable> (exactly same as let/const)


2. Execution phase: Jo chize executable hoti hai
Ex: Assigning values, calling function, evaluating expressions
*/


// var a = 5;
// let b = 15;
// console.log(a + b);

// function outer() {
//     let num1 = 10;
//     let num2 = 20;
//     function inner() {
//         let num1 = 50;
//         let num2 = 60;
//         return num1 + num2;
//     }
//     const result = inner() + num1 + num2;
//     return result;
// }

// const result = outer();
// console.log(result);


/* Stack/LIFO(Last In First Out): Ek pipe hota hai jiske niche dhakkan laga hota hai jisme kuch daalte hai (push) aur kuch nikalte hai (pop) */
/*
|                 |
|                 |
|                 |
|                 |
|_________________|
|      Inner      |
|_________________|
|      Outer      |  --> function execution context
|_________________|
| Global Execution|
|_____Context_____|
      
      Stack

Jaise jaise function call hona start hota hai stack me push hote hai aur values return karne ke baad we stack se pop hone lagte hai
*/


function recurse() {
    recurse()
}

recurse()