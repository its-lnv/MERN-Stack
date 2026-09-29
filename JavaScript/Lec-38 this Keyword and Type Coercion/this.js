"use strict" // becz of this js works more actively and strictly

/* this refers to current object 
ye function expression ko call karte time . notation ke left side me jo likha hota hai usse refer karta hai
*/

// let student = {
//     name: "Laxmi",
//     printName: function() {
//         // console.log(student.name);
//         console.log(this.name);
//     }
// }

// student.printName()  // rule: this === student

// let result = student.printName
// result()  // undefined -> kyuki yaha this use hua hai par result() ke left side me kuch hai hee nahi jisse this samajh paaye

// let student2 = {
//     name: "Varad",
//     printName: student.printName
// }

// student2.printName()

// console.log("Global", this);

// function fun1(){
//     console.log("Function", this);
// }
// fun1()

// console.log(global === globalThis);

// var a = 7;
// console.log(this.a);

/* 
window, this, global, globalthis -> global object

browser: globalthis === window === this
node: globalthis === global
*/


/* arrow function me khud ka this nahi hota isme lexical environment ka this use karta hai */

// let product = {
//     name: "Manu",
//     printName: () => {
//         console.log(this.name);
//     }
// }

// product.printName()


// let product = {
//     name: "Manu",
//     printName: function() {
//         const print = () => {
//             console.log(this.name);
//         }
//         print()
//     }
// }

// product.printName()


let nestedFunction = {
    name: "Something",
    fun: function () {
        let product = {
            // name: "Iphone",
            printName: function () {
                const print = () => {
                    console.log(this.name);  // undefined --> kyuki product ne printName ko this dia hai par product me name hai hee nahi isliye undefined aur yaha agar name nahi hai toh apne grandparent ke paas nahi jayega
                }
                print()
            }
        }
        product.printName()
    }
}
nestedFunction.fun()

/*
arrow function -> this isme nahi hota ye parent se leta hai
normal function -> this apne object se leta hai
*/