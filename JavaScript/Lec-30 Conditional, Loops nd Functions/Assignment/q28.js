let balance = 50000;
const depositMoney = 500;
const withdrawMoney = 700;
const choice = 3;

switch (choice) {
    case 1:
        console.log("Current Balance =", balance);
        break;
    case 2:
        balance = balance + depositMoney;
        console.log("Current Balance =", balance);
        break;
    case 3:
        if (withdrawMoney <= balance) {
            balance = balance - withdrawMoney;
            console.log("Current Balance =", balance);
        }
        else {
            console.log("Insufficient balance");
        }
        break;
    case 4:
        console.log("Thank you for using ATM");
        break;
    default:
        console.log("Invalid choice");
}