/*

Async Function: We use async keyword to declare or define the async funcion and async function always returns promise

Await: Await is how you consume the promise object or it eliminates the promise chain (await ka matlab hai wait karo and await async code ko handle karta hai like .then())
===> It can be used only inside async function
===> Await mean pausing without blocking
===> ye waha use hota hai jaha koi promise return ho raha ho ya koi async task ho
*/

// async function fun2() {
//     // console.log("Hii");
//     return 11;
// }

// function fun1() {
//     // console.log("Hello");
//     // return Promise.resolve(10)
//     return 10;
// }

// fun2().then((value) => {
//     console.log(value);

// })

// console.log(fun1());



// console.log("a");

// async function fun3() {
//     console.log("b");
// }

// console.log("c");

// fun3()




// async function fun4() {
//     return "hii";
// }

// function fun5() {
//     return Promise.resolve("Hello")
// }

// console.log("0");

// async function fun6() {
//     // fun4().then((val) => {
//     //     console.log(val);
//     // })

//     console.log("1");
//     let val = await fun4()
//     console.log("2");
//     let val2 = await fun5()
//     console.log("3");

//     console.log(val, val2);
    
// }

// console.log("laxmi");

// fun6()

// console.log("4");




// console.log("a");

// async function random() {
//     console.log("b");
    
//     await 1;
    
//     console.log("c");
    
// }

// random()

// console.log("d");




// async function fun3() {
//     return "hello";
// }

// function fun4() {
//     return Promise.reject("Error aavi gyo")
// }

// async function fun5() {
//     try {
//         let data = await fun3()
//     let data2 = await fun4()
//     console.log(data, data2);
//     } catch(err) {
//         console.log(err);     
//     } finally {
//         console.log("Ye toh hamesha chalego");
//     }   
// }

// fun5()





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

function addToCart() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza adding to Cart...");
        setTimeout(() => {
            console.log("Pizza added to Cart");
            resolve()
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
                console.log("Bass aa hee gya pizza...");
                
                resolve()
            }
            else {
                reject("Payment failed")
            }
        }, 5000)
    })
}

async function orderPizza() {
    try {
        let price = await searchPizza()
        await addToCart()
        await payment(price)
    } catch (err) {
        console.log(err);
    }
}

orderPizza()