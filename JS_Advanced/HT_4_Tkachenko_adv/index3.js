let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');

function changePos(node) {
    node.style.top = Math.random() * 100 + 'px';
    node.style.left = Math.random() * 100 + 'px';
}
setInterval(() => {
    changePos(div1);
    changePos(div2);
    changePos(div3);
}, 1000);