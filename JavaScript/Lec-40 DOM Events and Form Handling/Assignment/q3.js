const js = document.querySelector("#js")
const hover = document.querySelector("#hover")

js.addEventListener('mouseover', (e) => {
    js.classList.add("hidden")
    hover.classList.remove("hidden")
})