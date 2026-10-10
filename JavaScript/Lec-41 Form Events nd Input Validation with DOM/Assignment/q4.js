const lang = document.querySelector("#prog-lang")
const p = document.querySelector("p")

lang.addEventListener('change', (e) => {
    p.textContent = `Selected Language: ${lang.value}`
})