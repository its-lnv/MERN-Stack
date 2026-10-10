const form = document.querySelector("form")
const password = document.querySelector("#password")

function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage;
}

function clearError(input) {
    input.parentElement.querySelector(".error-message").textContent = "";
}

function validatePassword(password) {
    if(password.value.length < 6) {
        showError(password, "Password must be at least 6 characters.")
        return false;
    };
    clearError(password)
    return true;
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const isValidPassword = validatePassword(password)

    if(isValidPassword) {
        document.querySelector("h1").classList.remove("hidden")
    }
    else {
        document.querySelector("h1").classList.add("hidden")
    }

})