// This is a JavaScript file

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Salvar no Local Storage
        localStorage.setItem(username, password);
        
        // Redirecionar para a página de login
        window.location.href = 'login.html';
        alert('Cadastrado');
    } else {
        alert('Preencha todos os campos');
    }
});
