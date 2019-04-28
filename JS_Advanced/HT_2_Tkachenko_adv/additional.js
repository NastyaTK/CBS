let selectAbtn = document.getElementById("select_a");
let selectPbtn = document.getElementById('select_p');
let selectDivBtn = document.getElementById('select_div');
selectAbtn.onclick = function () {
  let links = document.getElementsByClassName('addBorderA');
  for (let i = 0; i < links.length; i++) {
    links[i].style.border = "3px solid red";
  }
}
selectPbtn.onclick = function () {
  let paragraphs = document.getElementsByClassName('addBorderP');
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.border = "2px solid green";
  }
}
selectDivBtn.onclick = function () {
  document.getElementById('test_div').style.border = "2px solid blue";
}