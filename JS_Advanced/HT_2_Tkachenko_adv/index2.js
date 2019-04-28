let addParagraphButton = document.getElementById('add_p');
let containerForParagraph = document.getElementById('p-container');
let paragraphsCount = 0;
addParagraphButton.onclick = function () {
    if (paragraphsCount < 3) {
        let newP = document.createElement('p');
        newP.innerHTML = "newParagraph </p>";
        containerForParagraph.appendChild(newP);
        paragraphsCount++;
        console.log(paragraphsCount);
    }
    else {
        for (let i = 0; i < 3; i++) {
            containerForParagraph.removeChild(containerForParagraph.firstChild);
            console.log(containerForParagraph);
        }
        paragraphsCount = 0;
    }
}