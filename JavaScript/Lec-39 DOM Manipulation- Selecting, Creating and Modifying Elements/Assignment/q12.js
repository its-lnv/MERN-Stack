let ul = document.querySelector("#skills")

let html = document.createElement("li")
let react = document.createElement("li")

html.textContent = "HTML"
react.textContent = "React"

ul.prepend(html)
ul.append(react)