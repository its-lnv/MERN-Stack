let users = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
]

let user = users.find(function(user) {
    return user.name === "Rahul";
})

console.log(user);
