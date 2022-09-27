localStorage.setItem('username', 'Sara');
localStorage.setItem('password', 'qwe123');
console.log(localStorage);

const btnLogin = document.getElementById('btnLogin');
btnLogin.onclick = function () {
    let inputUsername = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;
    let loginForm = document.getElementById('login');
    if (inputUsername == localStorage.getItem('username') && inputPassword == localStorage.getItem('password')) {
        let welcomeText = document.createElement('h3');
        welcomeText.innerText = "Välkommen " + localStorage.getItem('username');
        welcomeText.style.display = 'block';
        loginForm.style.display = 'none';
    }
    else {
    }
}