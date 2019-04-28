(function () {
    let Module2 = {};
    Module2.text = "PARAGRAPH2";
    let paragraphs2 = document.getElementsByClassName('module2');
    for (let i = 0; i < paragraphs2.length; i++) {
        paragraphs2[i].textContent = Module2.text;
    }
})();