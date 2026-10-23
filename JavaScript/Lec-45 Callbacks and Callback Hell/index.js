/* 
Callback function: Jab hum function ko as an argument pass karte hai kisi dusre function call ke time uske parameter me
*/

// function fun1(cb) {
//     console.log("Hii");
//     cb()
// }

// function cb() {
//     console.log("This is a callback function");
// }

// fun1(cb)


// /* High-Order Function */
// function a() {
//     function b() {}
//     return b;
// }




function searchPizza(cb1) {
    console.log("Searching Pizza...");
    setTimeout(() => {
        console.log("Here is Pizza's Menu");
        let price = 500;
        cb1(price)  // call kara rahe hai
    }, 2000)
}

function addToCart(cb2) {
    console.log("Pizza adding to Cart...");
    setTimeout(() => {
        console.log("Pizza added to Cart");
        cb2()
    }, 3000);
}

function payment(price, cb3) {
    console.log(`Payment initiated, Amount:${price}`);
    setTimeout(() => {
        console.log(`Payment completed, Amount:${price}`);
        cb3()
    }, 5000)
}

// Callback Hell
searchPizza(function(price) {  // call ho raha hai aur hone ke baad sidha andar jayega
    addToCart(function() {
        payment(price, function () {
            console.log("Pizza on the way...");
            
        })
    });
})
