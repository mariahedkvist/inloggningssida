/* Deklarera användarnamn och lösenord */
const checkUsername = "Sara";
const checkPassword = "qwe123";

const loginForm = document.getElementById('login');
const loggedIn = document.getElementById('loggedIn');
const sidebarDiv = document.getElementById('sidebar');
const failedLogin = document.getElementById('failedLogin');

const btnLogin = document.getElementById('btnLogin');
btnLogin.onclick = function storeLogin() {
    let inputUsername = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;
    localStorage.setItem('activeUser', inputUsername);
    localStorage.setItem('password', inputPassword);

    if (inputUsername == checkUsername && inputPassword == checkPassword) {
        activeUserPage();

    }
    else {
        wrongPasswordAlert();
    }
}

if (localStorage.getItem('activeUser') == 'Sara' && localStorage.getItem('password') == 'qwe123') {
    activeUserPage();
}

function activeUserPage() {
    loginForm.style.display = 'none';
    failedLogin.style.display = 'none';

    const welcomeText = document.createElement('h3');
    welcomeText.innerHTML = "Välkommen " + localStorage.getItem('activeUser');
    sidebarDiv.appendChild(welcomeText);

    const btnLogout = document.createElement('button');
    btnLogout.setAttribute('id', 'btnLogout');
    btnLogout.innerHTML = "Logga ut";
    sidebarDiv.appendChild(btnLogout);
    btnLogout.onclick = function logout() {
        localStorage.clear();
        btnLogout.style.display = 'none';
        loginForm.style.display = 'block';
        welcomeText.style.display = 'none';
    }
}

function wrongPasswordAlert() {
    const wrongPasswordMessage = document.createElement('p');
    wrongPasswordMessage.innerHTML = "Fel lösenord, försök igen";
    failedLogin.appendChild(wrongPasswordMessage);
    localStorage.clear();
}

function checkLoginStatus() {
    if (localStorage.getItem('activeUser') == 'Sara' && localStorage.getItem('password') == 'qwe123')
        activeUserPage();

}