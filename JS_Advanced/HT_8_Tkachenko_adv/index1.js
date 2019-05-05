let dropDown = document.getElementById("color");
let sizeInput = document.getElementById("size");
let btn = document.getElementById("apply");

console.dir(dropDown.options);

dropDown.addEventListener("change", function() {
  for (let i = 0; i < dropDown.options.length; i++) {
    if (this.options[i].selected) {
      document.cookie = "color=" + this[i].value;
    }
  }
});
sizeInput.addEventListener("blur", function() {
  document.cookie = "size=" + this.value;
});
function getCookie(name) {
  let cookie = document.cookie;
  let indexStart = cookie.indexOf(name);
  let indexEnd =
    cookie.indexOf(";", indexStart) == -1 ? cookie.length : cookie.indexOf(";");
  return cookie.slice(indexStart + name.length + 1, indexEnd);
}
btn.addEventListener("click", function() {
  document.body.style.fontSize = getCookie("size") + "px";
  document.body.style.backgroundColor = getCookie("color");
});
