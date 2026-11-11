// Closures

// function outer() {
//     let x = 1;

//     function inner() {
//         console.log(x);
//     }

//     return inner
// }

// const res = outer()
// res()


// Map

let arr = [1, 2, 3, 4, 5]

let output = arr.map((item) => {
    if (item >= 5) {
        return item + 5;
    }
    return item
})

console.log(output);
