const div = document.querySelector("div")
const btn = document.querySelector("button")

// div.addEventListener('click', (e) => {
//     console.log("Parent clicked");
// })

// btn.addEventListener('click', (e) => {
//     console.log("Button clicked ");
// })

div.addEventListener('click', (e) => {
    console.log("Parent clicked");
    e.stopPropagation();
})

btn.addEventListener('click', (e) => {
    console.log("Button clicked ");
    e.stopPropagation();
})