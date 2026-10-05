const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")

function random() {
    console.log("Button Clicked");
}

btn1.addEventListener('click', random)

btn2.addEventListener('click', () => {
    btn1.removeEventListener('click', random)
    console.log("Removed Event Listener");
})