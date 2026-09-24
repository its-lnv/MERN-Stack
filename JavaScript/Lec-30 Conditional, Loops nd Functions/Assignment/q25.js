const age = 78;
const numberOfTickets = 4;
let price;

if (age < 12) {
    price = 100;
}
else if (age >=12 && age <= 59) {
    price = 200;
}
else {
    price = 120;
}

console.log("Total ticket price =", numberOfTickets * price);