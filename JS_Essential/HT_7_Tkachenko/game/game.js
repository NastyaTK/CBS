let attempts = 5;
let answer = parseInt(Math.random() * 10);
let number;
function checkEqual(number) {
  if (number == answer) {
    document.write("answer is " + answer);
    return;
  }
}
function startGame() {
  for (let i = attempts; i > 0; i--) {
    if (number == undefined) {
      number = parseInt(
        prompt(
          "try to guess number between 0 and 10, you have " + i + " attempts",
          ""
        )
      );
      checkEqual(number);
    } else if (number > answer) {
      number = parseInt(
        prompt(
          "answer is less then your number, you have " + i + " attempts",
          ""
        )
      );
      checkEqual(number);
    } else if (number < answer) {
      number = parseInt(
        prompt(
          "answer is bigger then your number, you have " + i + " attempts",
          ""
        )
      );
      checkEqual(number);
    }
  }
}

startGame();
