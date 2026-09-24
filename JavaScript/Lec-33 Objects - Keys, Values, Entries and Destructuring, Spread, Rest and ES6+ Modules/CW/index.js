/*
Objects: collection of keys and values / collection related properties or methods
*/

/*
Dot notation: product.name // key
Bracket notation: product['221'] // key in string

=> this is used to use keys within the object
*/

// let product1 = ["iphone", 50923, 4.5, 75]

// let product = {
//     name: "iphone",
//     price: 50923,
//     avgRating: 4.5,
//     totalReviews: 75,
//     221: 56688,
//     discount() {
//         console.log("10%");
//     },
//     printProductName: function () {
//         console.log(this.name);
//     }
// }

// console.log(product.name);
// console.log(product["221"]);

// product.discount()
// product.printProductName()

// console.log(Object.keys(product));
// console.log(Object.values(product));
// console.log(Object.entries(product1));



/*
For of loop --> for array (for iterable data types)
*/
// for (value of product1) {
//     console.log(value);
// }

/*
when we pass a fun as an argument then it is called callback fun:
*/
// function b(fun) {
//     console.log("b");
//     fun()
// }

// b(function a() {
//     console.log("a");
// })

/*
For each method --> for array (for iterable data types)
*/

// product1.forEach(function (value, index) {
//     console.log(index, value);
// })

/*
For in loop --> for object (mainly) but in arr return indexes
*/
// for (value in product1) {
//     console.log(value);  
// }

// for (value in product) {
//     console.log(value);  
// }

/*
destructring of array
*/
// let product1 = ["iphone", 50923, 4.5, 75];
// const [name, price, c, d, e, f, g] = product1;
// console.log(name);
// console.log(g);
// console.log(price);


// let product = {
//     name: "iphone",
//     price: 50923,
//     avgRating: 4.5,
//     totalReviews: 75,
//     discount() {
//         console.log("10%");
//     },
//     printProductName: function () {
//         console.log(this.name);
//     }
// }

// const {name, totalReviews} = product; 
// console.log(name);
// console.log(totalReviews);

// for ([key, value] of Object.entries(product)) {
//     console.log(key, value);
// }

/*
rest and spread operator
spread -> unbox kar deta hai elements ko
syntax: ...arr
rest -> pack kar deta hai elements ko arr me
*/
// let arr = [99, 987, 88, 89999, 0, -5, 12]
// console.log(Math.min(...arr));

/*Use of spread -> in concatenation  */
// let a = [1, 2]
// let b = [3, 4]
// let c = [...a, ...b]
// console.log(c);

/* Rest */
// let product1 = ["iphone", 50923, 4.5, 75];
// const [name, price, ...rest] = product1;
// console.log(rest);

/*Use of rest */
// function add(...numbers) {
//     let sum = 0;
//     for (value of numbers) {
//         sum += value;
//     }
//     return sum;
// }

// console.log(add(4, 5, 2546, 245, 2));

// let product = {
//     name: "iphone",
//     price: 50923,
//     avgRating: 4.5,
//     totalReviews: 75,
//     models: ["base", "pro", "pro-max"],
//     manufacturingDetails: {
//         city: "Rasra",
//         state: "UP",
//         country: "India"
//     },
//     discount() {
//         console.log("10%");
//     },
//     printProductName: function () {
//         console.log(this.name);
//     }
// }

// let {name, price, ...private} = product;
// console.log(name, price, private);


