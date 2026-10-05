const btn = document.querySelector("button")
const p = document.querySelector("p")

function random() {
    p.classList.remove("hidden")
}

btn.addEventListener('click', random, {once: true})