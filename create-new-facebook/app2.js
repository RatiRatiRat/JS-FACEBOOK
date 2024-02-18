document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const passwordInput2 = document.getElementById("password2");
    const loginLink = document.querySelector(".create");

    function validateInputs() {
        if (emailInput.value.length >= 16) {
            emailInput.style.borderColor = "green";
        } else {
            emailInput.style.borderColor = "red";
        }

        if (passwordInput.value.length >= 8) {
            passwordInput.style.borderColor = "green";
        } else {
            passwordInput.style.borderColor = "red";
        }

        if (passwordInput.value === passwordInput2.value && passwordInput2.value !== "") {
            passwordInput2.style.borderColor = "green";
        } else {
            passwordInput2.style.borderColor = "red";
        }
    }

    function handleClick(event) {
        if (
            emailInput.style.borderColor === "green" &&
            passwordInput.style.borderColor === "green" &&
            passwordInput2.style.borderColor === "green"
        ) {
            localStorage.setItem("email", emailInput.value);
            localStorage.setItem("password", passwordInput.value);
        } else {
            event.preventDefault();
            alert("Please make sure all validations are confirmed before proceeding.");
        }
    }
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail) {
        emailInput.value = storedEmail;
    }
    if (storedPassword) {
        passwordInput.value = storedPassword;
    }

    emailInput.addEventListener("input", validateInputs);
    passwordInput.addEventListener("input", validateInputs);
    passwordInput2.addEventListener("input", validateInputs);
    loginLink.addEventListener("click", handleClick);

    validateInputs();
});
