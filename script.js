/* Deklarera användarnamn och lösenord */
const checkUsername = "Sara";
const checkPassword = "qwe123";

/* Hämta HTML-element */
const loginForm = document.getElementById('login');
const loggedIn = document.getElementById('loggedIn');
const sidebarDiv = document.getElementById('sidebar');
const failedLogin = document.getElementById('failedLogin');
const btnLogin = document.getElementById('btnLogin');

btnLogin.onclick = function storeLogin() {  /* Knapptryck callar inloggningsfunktion, hämtar anv. input */
    let inputUsername = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;
    localStorage.setItem('activeUser', inputUsername);  /* Lagra aktiv användare i localStorage */

    if (inputUsername == checkUsername && inputPassword == checkPassword) { /* Kolla angivna uppgifter mot lagrade */
        activeUserPage(); /* Om rätt uppgifter loggas anv in */
    }
    else {
        wrongPasswordAlert(); /* Om fel uppgifter ges felmeddelande */
    }
}

if (localStorage.getItem('activeUser') == 'Sara') { /* Om anv är lagrad i localStorage hålls denne inloggad vid refresh */
    activeUserPage();
}

/* Funktioner */
function activeUserPage() { /* Sida för inloggad användare */
    loginForm.style.display = 'none';   /* Gömmer inloggningsformulär */
    failedLogin.style.display = 'none'; /* Gömmer ev. felmeddelande */

    /* Genererar välkomsttext */
    const welcomeText = document.createElement('h3');
    welcomeText.innerHTML = "Välkommen " + localStorage.getItem('activeUser');
    sidebarDiv.appendChild(welcomeText);

    /* Genererar utloggningsknapp */
    const btnLogout = document.createElement('button');
    btnLogout.setAttribute('id', 'btnLogout');
    btnLogout.innerHTML = "Logga ut";
    sidebarDiv.appendChild(btnLogout);
    btnLogout.onclick = function logout() { /* Vid knapptryck callas utloggningsfunktion */
        localStorage.clear(); /* localStorage töms */
        btnLogout.style.display = 'none'; /* Göm utloggningsknapp */
        welcomeText.style.display = 'none'; /* Göm välkomsttext */
        loginForm.style.display = 'block'; /* Visa inloggningsformulär */
    }
}

function wrongPasswordAlert() { /* Felmeddelande */
    const wrongPasswordMessage = document.createElement('p');
    wrongPasswordMessage.innerHTML = "Fel lösenord, försök igen";
    failedLogin.appendChild(wrongPasswordMessage);
    localStorage.clear();
}