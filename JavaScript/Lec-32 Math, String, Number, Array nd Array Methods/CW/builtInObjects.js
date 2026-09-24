/*
Built-in Objects-
1. Math
===> abs() is used to turn no. into +ve
===> pow() is used to give power
===> sqrt() gives square root
===> min() gives min among many numbers
===> max() gives max among many numbers
===> round() rounds off given num (if 5>= goes up and viceversa)
===> ceil() upar chala jayega
===> floor() niche aa jayega
===> random() gives random values b/w 0 and 1 but 1 is not included

2. Number
===> isFinite() -> check karta hai ki num finite hai ya infinite
===> parseInt() -> to change into int type
===> toFixed() -> ye decimal hata deta hai aur isme param pass karne pe utne place tak decimal de deta hai

3. String
===> toUpperCase()
===> includes() -> str me woh woh word hai ya nhi
===> endswith() -> check karta hai ki string kisse end ho raha hai
===> replace() -> str me kisi word ke first iteration ko dusre word se replace karne k liye
===> replaceAll() -> str me kisi word ke saare iterations ko dusre word se replace karne k liye

4. Date
===> now() -> abhi ka unix timestamp paane k liye
*/

// function turnPositive (num) {
//     return num * (-1);
// }

// console.log(turnPositive(-9));


// const turnPositive = Math.abs(-10)

// console.log(turnPositive);

// console.log(Math.PI);

// console.log(Math.pow(2,9));

// console.log(Math.sqrt(625));

// console.log(Math.min(5,9,9,4,1,2,7));
// console.log(Math.max(5,9,9,4,1,2,7));

// console.log(Math.round(5.6));
// console.log(Math.round(3.3));
// console.log(Math.round(7.5));
// console.log(Math.round(7.595999595));

// console.log(Math.ceil(4.7));
// console.log(Math.floor(7.2));
// console.log(Math.floor(7.0));

// const min = 1000;
// const max = 9999;

// let result = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(result);


// console.log(Number.isFinite(56));

// console.log(Number.parseInt("56"));

// const num = 435.5599;
// console.log(num.toFixed(2));

// console.log(num.toPrecision(2));

// console.log("laxmi".toUpperCase());

// const str = "laxmi"
// console.log(str.length);

// const email = "example@gmail.com"
// console.log(email.includes("@") || email.includes(".com"));

// let fileName = "image.png"
// console.log(fileName.endsWith(".png"));

// let greet = "Hello Dosto, Hello Baccho";
// console.log(greet.replace("Hello", "Hii"));

// console.log(greet.replaceAll("Hello", "Hii"));


// let date = new Date();

// console.log(date.getDate()); // gives date
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toDateString());