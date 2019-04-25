// var n = prompt("N", 1);
var n = 5;
var result = 1;
var i = 1;
if (n == 0 || n == 1) {
  document.write("1");
} else {
  do {
    result = result * i;
    i++;
  } while (i <= n);
  document.write(result);
}
