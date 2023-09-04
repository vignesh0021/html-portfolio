// Function to validate the registration form
function validateForm() {
    var username = document.querySelector("#username").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var cpassword = document.querySelector("#cpassword").value;

    // Reset previous error messages
    var errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (element) {
        element.textContent = "";
    });

    // Basic validation for required fields
    var isValid = true;
    if (username === "") {
        displayError("username", "Username is required");
        isValid = false;
    }
    if (password === "") {
        displayError("password", "Password is required");
        isValid = false;
    }

    // Validate email format
    if (!isValidEmail(email)) {
        displayError("email", "Invalid email format");
        isValid = false;
    }

    // Validate password match
    if (password !== cpassword) {
        displayError("cpassword", "Passwords do not match");
        isValid = false;
    }

    // Additional validation can be added here

    return isValid; // If all validations pass
}

// Function to display error messages
function displayError(inputId, errorMessage) {
    var errorElement = document.querySelector(`#${inputId} + .error`);
    errorElement.textContent = errorMessage;
}

// Function to validate email format
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Add event listener to the submit button
var submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});



