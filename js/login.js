const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const togglePassword = document.getElementById('toggle-password');
const passwordField = document.getElementById('password');

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active-tab');
    registerTab.classList.remove('active-tab');
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active-tab');
    loginTab.classList.remove('active-tab');
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});

togglePassword.addEventListener('click', () => {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePassword.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordField.type = 'password';
        togglePassword.classList.replace('fa-eye-slash', 'fa-eye');
    }
});
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Assuming user login is successful, redirect to index.html
    window.location.href = './index.html'; // Redirect to the index page
});
