let users = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
];

let index = users.findIndex(function(user) {
    return user.name === "Priya";
});

console.log(index);