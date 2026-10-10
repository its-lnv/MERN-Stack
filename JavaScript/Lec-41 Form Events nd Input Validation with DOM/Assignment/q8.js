const form = document.querySelector("form")
const email = document.querySelector("#email")

function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage;
}

function clearError(input) {
    input.parentElement.querySelector(".error-message").textContent = "";
}

function validateEmail(email) {
    if(email.value.length === 0) {
        showError(email, "Email is required.")
        return false;
    };
    clearError(email)
    return true;
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const isValidEmail = validateEmail(email)

    if(isValidEmail) {
        document.querySelector("h1").classList.remove("hidden")
    }
    else {
        document.querySelector("h1").classList.add("hidden")
    }

})