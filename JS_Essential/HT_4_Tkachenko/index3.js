function checkNumber(num) {
  var positiveOrNegative;
  var simpleOrNo;
  var div2, div3, div5, div6, div9;
  if (num >= 0) {
    positiveOrNegative = "positive";
  } else {
    positiveOrNegative = "negative";
  }
  for (var i = 2; i < num; i++) {
    if (num % i != 0) {
      simpleOrNo = "simple";
    } else {
      simpleOrNo = "not Simple";
      break;
    }
  }
  div2 = num % 2 == 0 ? "true" : "false";
  div3 = num % 3 == 0 ? "true" : "false";
  div5 = num % 5 == 0 ? "true" : "false";
  div6 = num % 6 == 0 ? "true" : "false";
  div9 = num % 9 == 0 ? "true" : "false";
  return (
    "number: " + num + "<br>" +
    "positive or negative: " +
    positiveOrNegative +
    "<br>" +
    "simple or not simple: " +
    simpleOrNo +
    "<br>" +
    "div%2: " +
    div2 +
    "<br>" +
    "div%3: " +
    div3 +
    "<br>" +
    "div%5: " +
    div5 +
    "<br>" +
    "div%6: " +
    div6 +
    "<br>" +
    "div%9: " +
    div9
  );
}
document.write(checkNumber(parseInt(prompt("type number", 1))));
