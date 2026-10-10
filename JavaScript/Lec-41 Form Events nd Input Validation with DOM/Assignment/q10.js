const form = document.querySelector("form")
const username = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage;
}

function clearError(input) {
    input.parentElement.querySelector(".error-message").textContent = "";
}

function validateUsername(username) {
    if(username.value.length === 0) {
        showError(username, "Name is required.")
        return false;
    };

    clearError(username)
    return true;
}

function validateEmail(email) {
    if(email.value.length === 0) {
        showError(email, "Email is required.")
        return false;
    };
    clearError(email)
    return true;
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

    const isValidUsername = validateUsername(username)
    const isValidEmail = validateEmail(email)
    const isValidPassword = validatePassword(password)

    if(isValidUsername && isValidEmail && isValidPassword) {
        document.querySelector("h1").classList.remove("hidden")
    }
    else {
        document.querySelector("h1").classList.add("hidden")
    }

})