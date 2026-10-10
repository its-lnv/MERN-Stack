const form = document.querySelector("form")
const message = document.querySelector("h1")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    form.classList.add("hidden")
    message.classList.remove("hidden")
})