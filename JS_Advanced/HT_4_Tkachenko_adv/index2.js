let login = document.getElementById('login');
let pswd = document.getElementById('pswd');
let loginBtn = document.getElementById('loginBtn');
let message = document.getElementById('message');

loginBtn.onclick = function () {
    if (login.value == '' || pswd.value == '') {
        message.innerHTML = 'fill login and password fileds';
        login.style.backgroundColor = 'red';
        pswd.style.backgroundColor = 'red';
    } else if (login.value == 'admin' && pswd.value == '12345') {
        message.innerHTML = 'You are autorized';
        message.style.color = 'green';
    } else {
        message.innerHTML = 'not valid login or password';
        message.style.color = 'red';
    }
}