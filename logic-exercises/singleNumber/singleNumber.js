function singleNumber(numberList) {
    if (numberList.length <= 0) {
        console.log('Lista vazia!');
        return 'Lista vazia!';
    }
    var result;
    numberList.sort(function (a, b) { return a - b; });
    for (var i = 0; i < numberList.length; i++) {
        var actualNumber = Number(numberList[i]);
        var prevNumber = Number(numberList[i - 1]);
        var nextNumber = Number(numberList[i + 1]);
        if (isNaN(actualNumber)) {
            result = 'A lista deve conter apenas números!';
        }
        else if (actualNumber !== prevNumber && actualNumber !== nextNumber) {
            result = actualNumber;
        }
        result = result || 'Nenhum número solitário na lista';
    }
    return result;
}
// singleNumber([1,1,2,2,3,3,4,4,5,6,6,])
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6]));
// singleNumber([4,1,2,1,2])
// singleNumber([1,1,5,2,4,3])
// singleNumber([4,1,2,1,2,4])
// singleNumber([])
// singleNumber(['4', '1', 'abacate'])
// singleNumber(['1', '1', '4', '4', '100', '25', '25'])
