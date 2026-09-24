const firstNum = 10;
const secondNum = 0;
const operator = "%";

switch (operator) {
    case "+":
        console.log(firstNum + secondNum);
        break;
    case "-":
        console.log(firstNum - secondNum);
        break;
    case "*":
        console.log(firstNum * secondNum);
        break;
    case "/":
        if (secondNum === 0) {
            console.log("Error: Cannot divide by zero");
        }
        else {
            console.log(firstNum / secondNum);
        }
        break;
    case "%":
        if (secondNum === 0) {
            console.log("Error: Cannot divide by zero");
        }
        else {
            console.log(firstNum % secondNum);
        }
        break;
    default:
        console.log("Invalid Operator");
}