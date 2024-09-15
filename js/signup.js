const toggleRegisterPassword = document.getElementById('toggle-register-password');
const registerPasswordField = document.getElementById('register-password');

toggleRegisterPassword.addEventListener('click', () => {
    if (registerPasswordField.type === 'password') {
        registerPasswordField.type = 'text';
        toggleRegisterPassword.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        registerPasswordField.type = 'password';
        toggleRegisterPassword.classList.replace('fa-eye-slash', 'fa-eye');
    }
});
