const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto
    const username = usernameInput.value;
    const password = passwordInput.value;
    // Simulación de validación de credenciales
    if (username === 'admin' && password === '123') {
        alert('Inicio de sesión exitoso!');
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});