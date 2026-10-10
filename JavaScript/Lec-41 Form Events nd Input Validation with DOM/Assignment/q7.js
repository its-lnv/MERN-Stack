const form = document.querySelector("form")
const username = document.querySelector("#name")

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

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const isValidUsername = validateUsername(username)

    if(isValidUsername) {
        document.querySelector("h1").classList.remove("hidden")
    }
    else {
        document.querySelector("h1").classList.add("hidden")
    }

})