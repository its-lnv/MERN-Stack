const form = document.querySelector("form")
const message = document.querySelector("h1")

form.addEventListener('submit', (e) => {
    form.classList.add("hidden")
    message.classList.remove("hidden")
})