
function fillArray(arr) {
  let resultArray = [];
  if (arr[0] > arr[arr.length - 1]) {
    let length = arr[0] - arr[arr.length - 1]  + 1;
    arr = arr.reverse();
    for (let i = 0; i < length; i++) {
        if (i == 0) {
          resultArray[i] = arr[0];
        } else {
          resultArray.push(resultArray[i - 1] + 1);
        }
      }
      return resultArray.reverse();
  } else {
    let length = arr[arr.length - 1] - arr[0] + 1;
    for (let i = 0; i < length; i++) {
      if (i == 0) {
        resultArray[i] = arr[0];
      } else {
        resultArray.push(resultArray[i - 1] + 1);
      }
    }
    return resultArray;
  }
}
document.write(fillArray([15, 10]));
