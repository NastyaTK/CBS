let input1 = document.getElementById('num1');
let input2 = document.getElementById('num2');
let result = document.getElementById('result');

document.getElementById('plus').onclick = function () {
    let sumResult = document.createElement('p')
    if (parseInt(input1.value) && parseInt(input2.value)) {
        sumResult.innerHTML = 'result: ' + (parseInt(input1.value) + parseInt(input2.value)) + '</p><br>';
    } else {
        sumResult.innerHTML = 'fill input fields and retry<br>';
    }
    result.appendChild(sumResult);
}
document.getElementById('minus').onclick = function () {
    let minusResult = document.createElement('p')
    if (parseInt(input1.value) && parseInt(input2.value)) {
        minusResult.innerHTML = 'result: ' + (parseInt(input1.value) - parseInt(input2.value)) + '</p><br>';
    } else {
        minusResult.innerHTML = 'fill input fields and retry<br>';
    }
    result.appendChild(minusResult);
}
document.getElementById('multiply').onclick = function () {
    let multResult = document.createElement('p')
    if (parseInt(input1.value) && parseInt(input2.value)) {
        multResult.innerHTML = 'result: ' + (parseInt(input1.value) * parseInt(input2.value)) + '</p><br>';
    } else {
        multResult.innerHTML = 'fill input fields and retry<br>';
    }
    result.appendChild(multResult);
}
document.getElementById('divide').onclick = function () {
    let multResult = document.createElement('p')
    if (parseInt(input1.value) && parseInt(input2.value)) {
        if (parseInt(input2.value) != 0) {
            multResult.innerHTML = 'result: ' + (parseInt(input1.value) / parseInt(input2.value)) + '</p><br>';
        } else {
            multResult = 'can`t divide by zero<br>'
        }
    } else {
        multResult.innerHTML = 'fill input fields and retry<br>';
    }
    result.appendChild(multResult);
}