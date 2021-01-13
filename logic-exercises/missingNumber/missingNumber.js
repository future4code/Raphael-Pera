function missingNumber(arr) {
    var newArr = arr.sort();
    for (var i = 1; i < newArr.length; i++) {
        if (newArr[i] !== newArr[i - 1] + 1)
            return newArr[i] - 1;
    }
    return null;
}
console.log(missingNumber([5, 3, 2, 4, 1]));
