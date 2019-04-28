function setBorder(className) {
    let elementsArray = document.querySelectorAll('.' + className);
    for (let i = 0; i < elementsArray.length; i++) {
        switch (className) {
            case "green":
                elementsArray[i].style.border = "2px solid green";
                break;
            case "red":
                elementsArray[i].style.border = "2px solid red";
                break;
            default:
                elementsArray[i].style.border = "2px solid blue";
                break;
        }
    }
}
setBorder("red");