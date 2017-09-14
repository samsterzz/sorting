function bubbleSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        var arr1 = arr
        arr = swap(arr[i], arr[i + 1]);
    }

}

function swap(x, y) {
    var swapArr = [];

    if (x <= y) {
        swapArr.push(x);
        swapArr.push(y);
    } else {
        swapArr.push(y);
        swapArr.push(x); 
    }

    return swapArr;
}