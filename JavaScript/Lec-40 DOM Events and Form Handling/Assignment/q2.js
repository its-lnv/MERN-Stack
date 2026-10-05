let btn = document.querySelector("#btn")
let p1 = document.querySelector("#welcome")
let p2 = document.querySelector("#bye")

btn.addEventListener('click', (e) => {
    p1.classList.add("hidden")
    p2.classList.remove("hidden")
})