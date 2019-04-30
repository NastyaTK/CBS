let input = prompt("type a+b, a-b, a*b, a/b");
let operation, result;

function countResult(input) {
    if (input == null || input == "") {
        result = "Empty input";
    } else {
        let numbersPattern = RegExp(/[0-9]+/g);
        let numbers = input.match(numbersPattern);
        let sign = input.match(RegExp(/[+]|[-]|[*]|[/]/))
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = parseInt(numbers[i]);
        }
        console.log(sign);
        switch (sign[0]) {
            case "+":
                result = numbers[0] + numbers[1];
                break;
            case "-":
                result = numbers[0] - numbers[1];
                break;
            case "*":
                result = numbers[0] * numbers[1];
                break;
            case "/":
                if (numbers[1] == 0) {
                    result = "Error";
                } else {
                    result = numbers[0] / numbers[1];
                }
                break;
            default: result = "Error"
        }
    }
    return result;
}
document.write("result = " + countResult(input));