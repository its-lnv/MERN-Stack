const btn = document.querySelector("#btn")
const h1 = document.querySelector("h1")

btn.addEventListener('click', (e) => {
    h1.classList.toggle("hidden");
});