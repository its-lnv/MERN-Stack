const choice = 3;
const quantity = 4;
let price;

switch (choice) {
    case 1:
        price = 150;
        break;
    case 2:
        price = 250;
        break;
    case 3:
        price = 180;
        break;
    case 4:
        price = 120;
        break;
    default:
        console.log("Not available");
        break;
}

console.log("Total =", price * quantity);