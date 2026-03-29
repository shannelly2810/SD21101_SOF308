const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
function validateFullName() {

}

function validateUsername() {
    if (username.value.trim().length < 5) {
        username.classList.add('is-invalid');
    } else {
        fullname.classList.remove('is-invalid');
        fullname.classList.add('is-valid'); // Show green text for success
    }
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid'); // Show green text for success
    }
}

// function validatePassword() {
//     const passwordPattern = ;
//     if ()
// }

function validateConfirmPassword() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
    } else {
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
    }
}

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
fullname.addEventListener('keyup', validateFullname);
username.addEventListener('keyup', validateUsername);
email.addEventListener('keyup', validateEmail);
confirmPassword.addEventListener('keyup', validateConfirmPassword);
password.addEventListener('keyup', validatePassword);