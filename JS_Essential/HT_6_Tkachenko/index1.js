let arr1 = [];
let arr2 = ["a", "b", "c", "d"];
function findBiggerArray(array1, array2) {
  if (array1.length == 0 || array2.length == 0) {
    return "at least 1 empty array";
  } else if (array1.length > array2.length) {
    return array1;
  } else if (array1.length < array2.length) {
    return array2;
  } else {
    return "thr same length";
  }
}
document.write(findBiggerArray(arr1, arr2));
