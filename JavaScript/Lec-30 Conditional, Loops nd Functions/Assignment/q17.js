const salary = 50000;
const experience = 12;
let bonus;

if (experience >= 10) {
    bonus = 20/100;
}
else if (experience >= 5) {
    bonus = 10/100;
}
else if (experience >= 2) {
    bonus = 5/100;
}
else {
    bonus = 0;
}

bonus = salary * bonus
const finalSalary = salary + bonus

console.log("Original salary =", salary);
console.log("Bonus =", bonus);
console.log("Final Salary =", finalSalary);