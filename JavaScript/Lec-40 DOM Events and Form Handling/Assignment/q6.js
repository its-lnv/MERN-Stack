const inp = document.querySelector("#inp")
const p = document.querySelector("p")

inp.addEventListener('input', (e) => {
    p.textContent = `You typed: ${e.target.value}`
});