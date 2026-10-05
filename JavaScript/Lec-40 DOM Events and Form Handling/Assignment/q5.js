let div = document.querySelector("div")

div.addEventListener('mousemove', (e) => {
    console.log(e.clientX)
    console.log(e.clientY)
})