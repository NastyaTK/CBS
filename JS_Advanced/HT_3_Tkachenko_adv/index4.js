let linkArr = [];
let baseHref = location.href;
for (let i = 1; i <= 3; i++) {
    linkArr.push(document.getElementById('js_' + i));
}
for (let i = 0; i < linkArr.length; i++) {
    linkArr[i].onclick = function () {
        let newWindow = window.open();
        let newLink = newWindow.document.createElement('a');
        newLink.href = baseHref;
        newLink.innerHTML = 'JS lesson ' + (i + 1) + " is opened";
        newWindow.document.body.appendChild(newLink);
        let newText = newWindow.document.createElement('p');
        newText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>"
        newWindow.document.body.appendChild(newText);
        newLink.onclick = function () {
            window.close();
        }
    }
}
