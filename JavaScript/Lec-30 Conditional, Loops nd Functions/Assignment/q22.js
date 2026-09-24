/*
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Modulus
*/

const num1 = 5;
const num2 = 10;
const choice = 4;

switch (choice) {
    case 1:
        console.log("Addition =", num1 + num2);
        break;
    case 2:
        console.log("Subtraction =", num1 - num2);
        break;
    case 3:
        console.log("Multiplication =", num1 * num2);
        break;
    case 4:
        if (num2 != 0) {
            console.log("Division =", num1 / num2);
        }
        else {
            console.log("Invalid Division");
        }
        break;
    case 5:
        if (num2 != 0) {
            console.log("Division =", num1 % num2);
        }
        else {
            console.log("Invalid Division");
        }
        break;
    default:
        console.log("Invalid case");
        break;
}