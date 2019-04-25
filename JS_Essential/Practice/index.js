let result = 1;
function pow(arr){
    for (let i = 0; i <arr.length; i++){
        if(arr[i] != 0){
            result = result*arr[i];
        }
    }
    return result;
}

document.write(pow([1,2,3,4,0,5]));