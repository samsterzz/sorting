function bubbleSort(arr) {

  for (var i = 0; i < arr.length - 1; i++) {
    for (var k = i; k < arr.length; k++) {
      if (!isInOrder(arr, i)) {
        swap(arr, k);
      }
    }
  }
  return arr;
}

function isInOrder(arr, index) {
  if (index === arr.length) {
    return true;
  } else {
    return arr[index] <= arr[index + 1];
  }
}

function swap(arr, index) {
  var temp = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
}
