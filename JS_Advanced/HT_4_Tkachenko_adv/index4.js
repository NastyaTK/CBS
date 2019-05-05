let topBtn = document.getElementById('topBtn');
let bottomBtn = document.getElementById('bottomBtn');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');
let div = document.getElementById('moveDiv');

function moveTop(node) {
    node.style.top = (node.offsetTop - 1) + 'px';
}
function moveBottom(node) {
    node.style.top = (node.offsetTop + 1) + 'px';
}
function moveRight(node) {
    node.style.left = (node.offsetLeft + 1) + 'px';
}
function moveLeft(node) {
    node.style.left = (node.offsetLeft - 1) + 'px';
}
topBtn.onclick = function () {
    let interval = setInterval(() => {
        moveTop(div);
    }, 10);
    setTimeout(() => {
        clearInterval(interval);
    }, 1000);
}
bottomBtn.onclick = function () {
    let interval = setInterval(() => {
        moveBottom(div);
    }, 10);
    setTimeout(() => {
        clearInterval(interval);
    }, 1000);
}
leftBtn.onclick = function () {
    let interval = setInterval(() => {
        moveLeft(div);
    }, 10);
    setTimeout(() => {
        clearInterval(interval);
    }, 1000);
}
rightBtn.onclick = function () {
    let interval = setInterval(() => {
        moveRight(div);
    }, 10);
    setTimeout(() => {
        clearInterval(interval);
    }, 1000);
}