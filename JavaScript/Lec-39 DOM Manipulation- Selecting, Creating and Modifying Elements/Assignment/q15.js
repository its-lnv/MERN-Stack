let body = document.querySelector("body")
let btn = document.querySelector("#btn")

let clonedBtn = btn.cloneNode(true)
body.append(clonedBtn)