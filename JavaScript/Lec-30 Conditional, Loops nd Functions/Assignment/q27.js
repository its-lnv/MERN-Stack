const unit = 300;
let price;

if (unit >= 0 && unit <= 100) {
    price = 5;
}
else if (unit >= 101 && unit <= 200) {
    price = 7;
}
else {
    price = 10;
}

const originalBill = unit * price;
let discount;

if (originalBill >= 2000) {
    discount = 10
}
else {
    discount = 0
}

const finalBill = originalBill - (originalBill * (discount/100))

console.log("Units =", unit);
console.log("Original Bill =", originalBill);
console.log("Discount =", discount, "%");
console.log("Final Bill =", finalBill);