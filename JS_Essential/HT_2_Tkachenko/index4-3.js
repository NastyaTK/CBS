var i = 5,
  line = i,
  a = '_',
  b = '*';

while (i-- > 0) {
  document.write(
    Array(1 + i).join(a) + Array((line - i) * 2).join(b) + Array(1 + i).join(a) + "<br>");
}