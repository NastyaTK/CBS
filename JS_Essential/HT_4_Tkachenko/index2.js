function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  if (b == 0) {
    return "div to 0";
  } else {
    return a / b;
  }
}

var x = prompt("x");
var y = prompt("y");
var operand = prompt("operand");

switch (operand){
  case "+":
    document.write(add(x,y));
    break;
  case "-":
    document.write(sub(x, y));
    break;
  case "*":
    document.write(mul(x, y));
    break;
  case "/":
    document.write(div(x,y));
    break;
  default:
    document.write("incorrect operand");
}