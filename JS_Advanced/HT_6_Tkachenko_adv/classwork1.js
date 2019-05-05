let div = document.getElementById("coloredDiv");
console.log(div.offsetLeft + " " + div.offsetTop);

div.addEventListener("mousedown", function(event) {
  moove(this, event);
});

function moove(element, event) {
  console.log(element);
  let startX = element.offsetLeft;
  let startY = element.offsetTop;
  console.log("startX = " + startX + " startY = " + startY);
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  console.log("mouseX = " + mouseX + " mouseY = " + mouseY);
  let diffX = mouseX - startX;
  let diffY = mouseY - startY;
  console.log("diffX = " + diffX + " diffY = " + diffY);
  document.addEventListener("mousemove", function() {
    element.style.left = diffX + "px";
    element.style.top = diffY + "px";
    if (mouseX >= 300) {
      element.style.backgroundColor = "green";
    } else {
      element.style.backgroundColor = "blue";
    }
  });
}
