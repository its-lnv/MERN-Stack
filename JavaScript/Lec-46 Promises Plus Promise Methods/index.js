/* 
Promises: A promise is an object that represents the future result of async tasks


===> Promise has 3 states:
1. Initial
2. Fullfilled
3. Rejected

===> Initial state se promise hamesha settled rahega (settled: either fulfilled or rejected)
===> resolve and reject are also functions
===> Once promise becomes settled, it doesn't go back to pending
===> Creating a promise is synchronous but the work inside it can be sync or async
===> Promise ke andar ka function ek sync cb fun hai jiske wajah se woh apne aap hee call ho jayega 


Consuming Promises: (means using methods of Promise Object)
(1) .then() = then is method. onFullfilled & onRejected are cb fun. 1st one is executed when promise is resolved and 2nd is executed when it's rejected 
(2) .catch() = it is always of reject
(3) .finally() = always runs either promise is fulfilled or rejected

===> all 3 are asynchronous and they uses microtask queue. and all methods always returns again a promise

Priority series acc to Event Listener:
callback queue > microtask queue > macrotask queue
*/



// console.log("a");


// const p = new Promise(function (resolve, reject) {   // constructor: create new Promise object and new is keyword that is used to create new --- object
//     // resolve("Hii")
//     reject("Server down hai Bitwa")
// })

// console.log("c");
// console.log(p);
// console.log(typeof p);

// p.then(onFullfilled, onRejected)

// p.then(function onFullfilled(val) {
//     console.log(val);
// }, function onRejected(val) {
//     console.log(val);
// })

// p.then(function onFullfilled(val) {
//     console.log(val);
// })
//     .then(function onFullfilled(val) {
//         console.log(val);
//     })
//     .then(function onFullfilled(val) {
//         console.log(val);
//     })
//     .catch(function onRejected(val) {
//         console.log(val);
//     })
//     .finally(function always() {
//         console.log("Hamesha chalega");

//     })


// console.log("a");

// const p2 = new Promise(function f1(resolve, reject) {
//     resolve()
// })

// Promise.resolve().then(function f2() {
//     console.log("Inside resolve promise");
// })

// p3.then(function f3() {
//     console.log("F3 Function");
// })


function searchPizza() {
    return new Promise(function (resolve, reject) {
        console.log("Searching Pizza...")
        setTimeout(() => {
            console.log("Here is Pizza's Menu");
            let price = 500;
            resolve(price)
        }, 2000)
    })
}

function addToCart(price) {
    return new Promise(function (resolve, reject) {
        console.log("Pizza adding to Cart...");
        setTimeout(() => {
            console.log("Pizza added to Cart");
            resolve(price)
        }, 3000);
    })
}

function payment(price) {
    return new Promise(function (resolve, reject) {
        console.log(`Payment initiated, Amount:${price}`);
        setTimeout(() => {
            let isPaymentSuccessfull = true;
            if (isPaymentSuccessfull) {
                console.log(`Payment completed, Amount:${price}`);
                resolve()
            }
            else {
                reject("Payment failed")
            }
        }, 5000)
    })
}

searchPizza()
    .then(function cb1(price) {
        return addToCart(price)
    }).then(function cb2(price) {
        return payment(price)
    }).then(function cb3() {
        console.log("Pizza bss aa hee raha hai");
    }).catch(function (err) {
        console.log(err);

    })