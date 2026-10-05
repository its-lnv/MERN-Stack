const ul = document.querySelector("#skills")
const li1 = document.querySelector("#skill1")
const li2 = document.querySelector("#skill2")
const li3 = document.querySelector("#skill3")

ul.addEventListener('click', (e) => {
    if (e.target.tagName === "LI" && e.target.textContent === "HTML") {
        console.log("HTML button clicked");
    }
    else if (e.target.tagName === "LI" && e.target.textContent === "CSS") {
        console.log("CSS button clicked");
    }
    else if (e.target.tagName === "LI" && e.target.textContent === "JavaScript") {
        console.log("JavaScript button clicked");
    }
})