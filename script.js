const checkUsername = "Sara";
const checkPassword = "qwe123";

const loginForm = document.getElementById('login');
const loggedIn = document.getElementById('loggedIn');
const sidebarDiv = document.getElementById('sidebar');
const failedLogin = document.getElementById('failedLogin');
const btnLogin = document.getElementById('btnLogin');

homepage();

function homepage() {
    btnLogin.onclick = function storeLogin() {
        let inputUsername = document.getElementById('username').value;
        let inputPassword = document.getElementById('password').value;
        localStorage.setItem('activeUser', inputUsername);

        if (inputUsername == checkUsername && inputPassword == checkPassword) {
            activeUserPage();
        }
        else {
            wrongPasswordAlert();
        }
    }

    if (localStorage.getItem('activeUser') == 'Sara') {
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
            welcomeText.style.display = 'none';
            loginForm.style.display = 'block';
        }
    }
}

function wrongPasswordAlert() {
    loginForm.style.display = 'none';

    const wrongPasswordMessage = document.createElement('p');
    wrongPasswordMessage.innerHTML = "Fel lösenord";
    failedLogin.appendChild(wrongPasswordMessage);

    const tryagainBtn = document.createElement('button');
    tryagainBtn.innerHTML = "Försök igen";
    failedLogin.appendChild(tryagainBtn);
    localStorage.clear();
    
    tryagainBtn.onclick() = homepage();
}