let ul = document.querySelector("#skills")

let li = document.createElement("li")
li.textContent = "CSS"

const skills = ul.children
ul.insertBefore(li, skills[1])