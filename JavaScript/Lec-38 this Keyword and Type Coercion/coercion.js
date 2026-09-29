/* Coercion: Type conversion 
Type:
1. Implicit (JS khud se karta hai)
2. Explicit (Mnually)

+ : agar koi v operand string hua toh string concatenation ho jayega. JS remaining operand ko v string me convert kar degi
/, -, * : JS saare operand ko number me convert karegi agar koi number nahi hai toh & output degi


*/

// console.log("5" + 4);  // 54
// console.log("2" * 5);  // 10
// console.log(5 - "10");  // -5
// console.log(true + 1);  // 2
// console.log(true - true);  // 0

// let result = "Hii" - 6;
// console.log(result);
// console.log(Number.isNaN(result));


// console.log(Number("5") + 4);  // 9
// console.log(Number("5899wje"));  //NaN

console.log(!!!!"");  // false
console.log(!![]);  // true
console.log(!!0);  // false
console.log(!!"0");  // true
