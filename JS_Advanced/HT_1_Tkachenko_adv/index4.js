function createNumber(number) {
  this.number = number;
}
createNumber.prototype.toString = function() {
  return document.write("number: " + this.number + "<br>");
};
for (let i = 0; i < 10; i++) {
  let num = new createNumber(i);
  num.toString();
}
