const div = document.querySelector("#parent")
const btn = document.querySelector("#child")

div.addEventListener('click', (e) => {
    console.log("Parent clicked");
}, {capture: true})

btn.addEventListener('click', (e) => {
    console.log("Button clicked ");
})