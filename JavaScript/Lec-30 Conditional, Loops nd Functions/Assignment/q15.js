const unit = 201;
let bill;

if (unit > 0) {
    if (unit <= 100) {
        bill = unit * 5;
    }
    else if (unit <= 200) {
        bill = unit * 7;
    }
    else {
        bill = ((100 * 5) + (100 * 7) + ((unit - 200) * 10));
    }
}
else {
    console.log("Invalid unit");
}

console.log("Final Bill =", bill);