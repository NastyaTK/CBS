document.addEventListener("keydown", btnEvent);
function btnEvent(event) {
  if ((event.ctrlKey && event.key == "a") || event.key == "A") {
    document.write("Selected <br>");
    console.log("Ctrl + A");
  } else if (
    (event.ctrlKey && event.shiftKey && event.key == "s") ||
    event.key == "S"
  ) {
    document.write("Everything Saved");
    console.log("Ctrl + S + A");
  } else if ((event.ctrlKey && event.key == "s") || event.key == "S") {
    document.write("Saved <br>");
    event.preventDefault();
    console.log("Ctrl + S");
  }
}
