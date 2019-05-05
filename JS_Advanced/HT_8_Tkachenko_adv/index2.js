let dropDown = document.getElementById("color");
let sizeInput = document.getElementById("size");
let btn = document.getElementById("apply");

dropDown.addEventListener("change", function() {
  for (let i = 0; i < dropDown.options.length; i++) {
    if (this.options[i].selected) {
      window.localStorage.setItem("color", this[i].value);
    }
  }
});
sizeInput.addEventListener("blur", function() {
  window.localStorage.setItem("size", this.value);
});
btn.addEventListener("click", function() {
  document.body.style.fontSize = window.localStorage.getItem("size") + "px";
  document.body.style.backgroundColor = window.localStorage.getItem("color");
});
