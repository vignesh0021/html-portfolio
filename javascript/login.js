//login page validation
// Get the form element
var form = document.querySelector(".login-container form");

// Get the input elements
var username = document.getElementById("lusername");
var password = document.getElementById("lpassword");

// Get the error elements
var usernameError = document.querySelector(".lerror:first-of-type");
var passwordError = document.querySelector(".lerror:last-of-type");

// Add an event listener for the submit event
form.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Clear any previous error messages
    usernameError.textContent = "";
    passwordError.textContent = "";

    // Validate the username and password
    var valid = true;

    // Check if the username is empty
    if (username.value.trim() === "") {
        // Display an error message
        usernameError.textContent = "Please enter your username.";
        valid = false;
    }

    // Check if the password is empty
    if (password.value.trim() === "") {
        // Display an error message
        passwordError.textContent = "Please enter your password.";
        valid = false;
    }

    // If both inputs are valid, submit the form
    if (valid) {
        form.submit();
    }
});
