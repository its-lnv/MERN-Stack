const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const hint = document.querySelector("small")
const password = document.querySelector("#password")
const errorMessage = document.querySelector("#error-message")

const limit = 500;
charCount.textContent = `${limit} characters remaining`

// function showError(input, errorMessage) {
//     input.parentElement.querySelector(".error-message").textContent = errorMessage;
// }

// function clearError(input) {
//     input.parentElement.querySelector(".error-message").textContent = "";
// }

// function validateUsername (username){
//     // check 1
//     if (username.value.trim().length === 0) {
//         showError(username, "Name is not defined")
//         return false;
//     }

//     // check 2
//     else if (username.value.trim().length < 3) {
//         showError(username, "Username must be atleast 3 chararcters")
//         return false;
//     }

//     clearError(username)
//     return true;
// }

// function validatePassword (password){
//     if (password.value.trim().length === 0) {
//         showError(password, "Password is not defined")
//         return false;
//     }

//     else if (password.value.trim().length < 8) {
//         showError(password, "Password must be atleast 8 chararcters")
//         return false;
//     }

//     clearError(password)
//     return true;
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();  // to stop default reloading of browser

//     const isValidUsername = validateUsername(username)  // passing username element
//     const isValidPassword = validatePassword(password)  // passing password element

//     if (isValidUsername && isValidPassword) {
//         document.querySelector("h1").classList.remove("hidden")
//     }   
//     else {
//         document.querySelector("h1").classList.add("hidden")
//     }
    
//     // const email = document.querySelector("#email").value

//     // console.log({username: username.value, email, password});
    
// })

// bio.addEventListener('input', (e) => {
//     const count = 150 - bio.value.length
//     charCount.textContent = `${count} characters remaining` 
// })

// username.addEventListener('change', (e) => {
//     console.log("Change event", username.value);  
// })

// username.addEventListener('input', (e) => {
//     console.log("Input event", username.value);  
// })

// checkbox.addEventListener('change', (e) => {
//     console.log(checkbox.checked);  
// })

// country.addEventListener('change', (e) => {
//     console.log(country.value);  
// })

// username.addEventListener('focus', (e) => {
//     console.log("Focus");  
// })

// username.addEventListener('blur', (e) => {
//     console.log("Blur");  
// })

// password.addEventListener('focus', (e) => {
//     hint.classList.remove("hidden")
// }) 

// password.addEventListener('blur', (e) => {
//     hint.classList.add("hidden")
// }) 


/* Change tab kaam karta hai jab koi chiz out of focus hoti hai jabki input har keystroke pe kaam karta hai */