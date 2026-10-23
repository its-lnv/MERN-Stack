/* 
Sync task: Aisa kaam jo line by line execute hota hai
Async task: Aisa kaam jo kuch time lega execute hone me aur uske liye JS wait nhi karti

===> JS is single-threaded language
Thread: Sequence of instructions a computer executes

Web Api:
1. setTimeout
2. setInterval


EventLoop: ye hamesha call stack ko dekhta rehta hai ki empty hai ya nhi


setTimeout(callback fn, timer[in ms]) -> A web-api that executes tasks asynchronously (setTimeOut ek dabbe ki tarah hota hai jisme ham kisi task ko dete hai aur usse certain time baad execute karate hai)
===> ye api calls ke time use hoti hai
===> timer: means it takes min time to execute cb fun

setInterval(cb func, timer) -> cb func again & again  timer ke base pe execute hota rahega
*/

// console.log("Task 1");

// console.log("Task 2");

// const startTime = Date.now()
// while(Date.now() - startTime < 10000){}

// console.log("Task 3");

// setTimeout(() => {
//     console.log("Hii");

// }, 3000)

// console.log("task 1");

// setTimeout(function cb() {
//     console.log("task 2");
// }, 4000)

// setTimeout(function cb() {
//     console.log("task 5");
// }, 1000)

// setTimeout(function cb() {
//     console.log("task 4");
// }, 2000)

// console.log("task 3");

// console.log("task 1");

// setTimeout(function cb() {
//     console.log("task 2");
// }, 4000)

// while(Date.now() - startTime < 10000){}

// setTimeout(function cb() {
//     console.log("task 5");
// }, 1000)

// setTimeout(function cb() {
//     console.log("task 4");
// }, 2000)

// console.log("task 3");



// console.log("a");

// setInterval(() => {
//     console.log("Hi");
// }, 4000)

// console.log("b");


// let count = 1;

// let id = setInterval(() => {
//     if (count >= 5) {
//         clearInterval(id)
//     }
//     console.log("Hii", count);
//     count++;
// }, 2000)


const body = document.querySelector("body")

let colorStr = "0123456789abcdef"

setInterval(() => {
    let color = ""
    for (let i = 0; i < 6; i++) {
        let randomVal = Math.floor(Math.random() * colorStr.length) + 1;
        color = color + colorStr[randomVal]
    }
    body.style.backgroundColor = `#${color}`
}, 0)