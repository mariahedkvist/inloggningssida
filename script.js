/* Deklarerar variabler för inloggningsuppgifter */ 
const checkUsername = "Sara";
const checkPassword = "qwe123";

/* Hämtar HTML-element */
const loginForm = document.getElementById('login');
const loggedIn = document.getElementById('loggedIn');
const sidebarDiv = document.getElementById('sidebar');
const failedLogin = document.getElementById('failedLogin');
const btnLogin = document.getElementById('btnLogin');

/* Registrerar knapptryck för att lagra angivna uppgifter */
btnLogin.onclick = function storeLogin() {
    let inputUsername = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;
    localStorage.setItem('activeUser', inputUsername);

    if (inputUsername == checkUsername && inputPassword == checkPassword) { /* Kontrollera inloggningsuppgifter */
        activeUserPage(); /* Genererar inloggningssidan */
    }
    else {
        wrongPasswordAlert(); /* Genererar felmeddelande */
    }
}

if (localStorage.getItem('activeUser') == 'Sara') { /* Kontrollerar om aktiv användare finns lagrad i ls */
    activeUserPage(); /* Genrerar inloggningssidan */
}

/* Funktioner */
function activeUserPage() {
    loginForm.style.display = 'none'; /* Gömmer inloggningsformulär och ev. genererat felmeddelande */
    failedLogin.style.display = 'none';

    const welcomeText = document.createElement('h3'); /* Genererar välkomsttext */
    welcomeText.innerHTML = "Välkommen " + localStorage.getItem('activeUser');
    sidebarDiv.appendChild(welcomeText);

    const btnLogout = document.createElement('button'); /* Genererar utloggningsknapp */
    btnLogout.setAttribute('id', 'btnLogout');
    btnLogout.innerHTML = "Logga ut";
    sidebarDiv.appendChild(btnLogout);
    btnLogout.onclick = function logout() {
        localStorage.clear(); /* Rensar lagrad användare vid knapptryck */
        btnLogout.style.display = 'none';
        welcomeText.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

function wrongPasswordAlert() { /* Genererar felmeddelande */
    const wrongPasswordMessage = document.createElement('p');
    wrongPasswordMessage.innerHTML = "Fel lösenord, försök igen";
    failedLogin.appendChild(wrongPasswordMessage);
    localStorage.clear();
}
