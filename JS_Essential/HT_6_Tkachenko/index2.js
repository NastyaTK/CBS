let firstArray = ['стол', 'стул', 'диван', 'кровать', 'коммод'];
let secondArray = ['люстра', 'диван', 'табурет', 'шкаф', 'стол'];

function findCoincidence(array1, array2){
    let coincidence = 0;
    for(let i = 0; i < array1.length; i++){
        if(array2.indexOf(array1[i]) >= 0){
            coincidence++;
            document.write('Найдено совпадение значений: ' + array1[i] + "<br>");
        }
    }
    return "Совпадений: " + coincidence;
}
document.write(findCoincidence(firstArray, secondArray));