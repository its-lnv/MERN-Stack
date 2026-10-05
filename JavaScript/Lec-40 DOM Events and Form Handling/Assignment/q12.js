const div = document.querySelector("#buttons")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")

div.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON" && e.target.textContent === "HTML") {
        console.log("HTML button clicked");
    }
    else if (e.target.tagName === "BUTTON" && e.target.textContent === "CSS") {
        console.log("CSS button clicked");
    }
    else if (e.target.tagName === "BUTTON" && e.target.textContent === "JavaScript") {
        console.log("JavaScript button clicked");
    }
})