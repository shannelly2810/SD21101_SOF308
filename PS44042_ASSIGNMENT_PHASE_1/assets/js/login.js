document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const user = document.getElementById('loginUser').value;
            const pass = document.getElementById('loginPass').value;
            if (user === "sa" && pass === "123") {
                alert("Login Successful! Welcome back, Phát.");
                window.location.href = "index.html";
            } else {
                alert("Login Failed! \nHint: sa / 123");
            }
        });
    }
});