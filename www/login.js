// This is a JavaScript file

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Verificar se o usuário e a senha correspondem
        const storedPassword = localStorage.getItem(username);
        if (password === storedPassword) {
            alert('Login bem-sucedido!'); 
             window.location.href = 'home.html';// Você pode redirecionar para a página de destino aqui.
        } else {
            alert('Credenciais incorretas');
        }
    } else {
        alert('Preencha todos os campos');
    }
});
