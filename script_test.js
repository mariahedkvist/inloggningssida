localStorage.setItem('username', 'Sara');
localStorage.setItem('password', 'qwe123');
console.log(localStorage);

const btnLogin = document.getElementById('btnLogin');
btnLogin.onclick = function (){
    let inputUsername = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;
    if (inputUsername == localStorage.getItem('username') && inputPassword == localStorage.getItem('password')){
        document.getElementById("welcome").innerText = "Welcome";
        }
    else{
        document.getElementById("welcome").innerText = "Wrong password, try again";
    }
}