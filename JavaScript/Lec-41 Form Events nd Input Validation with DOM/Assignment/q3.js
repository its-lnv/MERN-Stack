const random = document.querySelector("#random")
const p = document.querySelector("p")

random.addEventListener('input', (e) => {
    p.textContent = `You entered: ${random.value}`
}) 