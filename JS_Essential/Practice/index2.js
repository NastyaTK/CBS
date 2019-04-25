function power(arr, pow) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length >= pow) {
      if (i == pow) {
        result = Math.pow(arr[i], pow);
      }
    } else {
      result = -1;
    }
  }
  return result;
}
document.write(power([2, 3, 4, 5], 2));
