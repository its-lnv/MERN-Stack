function outer(){
    const a = 5;
    function inner() {
        console.log(a);
    }
    return inner;
}

const response = outer()
response();



/* Closure: A function that remembers its outer/parent scope variables (lexical environment) */


// function outer (){
//     let count = 0;
//     function counter() {
//         count += 1;
//         console.log(count);
//     }
//     return counter;
// }

// const counter = outer()
// counter() // 1
// counter() // 2
