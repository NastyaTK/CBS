var Module1 = {};
Module1.text = "PARAGRAPH";
Module1.changeText1 = function () {
    let paragraphs1 = document.getElementsByClassName('module1');
    for (let i = 0; i < paragraphs1.length; i++) {
        paragraphs1[i].textContent = Module1.text;
    }
}
Module1.changeText1();