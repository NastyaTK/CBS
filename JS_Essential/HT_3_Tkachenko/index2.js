var arr = [];
for (var i = 0; i < 20; i++){
    arr.push(parseInt(Math.random()*10));
}
document.write(arr + "<br>");
var sortedArr = arr.sort(function(a,b){return b-a});
document.write(sortedArr + "<br>")
document.write(sortedArr[0] + "<br>");
document.write(sortedArr[sortedArr.length -1]+"<br>");