/* Lagra användarnamn och lösenord */
localStorage.setItem('username', 'Sara');
localStorage.setItem('password', 'qwe123');

const btnLogin = document.getElementById('btnLogin');
btnLogin.onclick = function login() {
    let inputUsername = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;
    let loginForm = document.getElementById('login');
    let sidebar = document.getElementById('sidebar');
        if (inputUsername == localStorage.getItem('username') && inputPassword == localStorage.getItem('password')) {
            loginForm.style.display = 'none'; /* Gömmer inloggningsformulär */

            let welcomeText = document.createElement('div'); /* Visar välkomsttext och "logga ut" */
            welcomeText.innerHTML = "Välkommen " + localStorage.getItem('username');
            sidebar.appendChild(welcomeText);
            let btnLogout = document.createElement('button');
            btnLogout.innerHTML = "Logga ut";
            sidebar.appendChild(btnLogout);

            btnLogout.onclick = function logout() {
                localStorage.clear();
            }

            if (localStorage.getItem('username') == null) {
                console.log("hejhej");
            }
        }
        else {
            let wrongPassword = document.createElement('p');
            wrongPassword.value = "Fel lösenord, försök igen";
        }
    }