const balance = 50000;
const withdrawAmount = 50000;
let remainingBalance;

console.log("Balance:", balance);
console.log("Withdraw:", balance);


if (withdrawAmount > 0 && withdrawAmount <= balance) {
    remainingBalance = balance - withdrawAmount;
    console.log("Withdrawal successful");
    console.log("Remaining balance:", remainingBalance);
}
else {
    console.log("Re-enter Amount");
}