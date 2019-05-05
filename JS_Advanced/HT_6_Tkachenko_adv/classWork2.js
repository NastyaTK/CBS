let textInput = document.getElementById("textInput");
let textShift = document.getElementById("textShift");
document.addEventListener("keypress", function(event) {
  textInput.value += event.key;
});
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.key != "Shift") {
    textShift.value += event.key;
  }
});
