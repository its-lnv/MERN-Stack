const productPrice = 60;
const quantity = 2;

const total = productPrice * quantity
const discount = total * (10/100)
const final = total - discount

console.log("Total =", total);
console.log("Discount amount =", discount);
console.log("Final bill", final);