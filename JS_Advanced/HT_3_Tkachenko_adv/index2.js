if (location.search == "") {
    location.search += "a=" + parseInt(Math.random() * 100) + "&b=" + parseInt(Math.random() * 100);
}
let result = 0;
let numbers = [];
let searchArr = location.search.substring(location.search.indexOf("?") + 1).split("&");
for (let i = 0; i < searchArr.length; i++) {
    numbers.push(parseInt(searchArr[i].split("=")[1]));
}
for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
}
document.write("a + b = " + result);