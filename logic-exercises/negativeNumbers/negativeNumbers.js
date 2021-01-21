var negativeNumbers = function (numbers) {
    var negativeCount = 0;
    for (var i = 0; i < numbers.length; i++) {
        var array = numbers[i];
        for (var z = 0; z < array.length; z++) {
            if (array[z] < 0)
                negativeCount++;
        }
    }
    return negativeCount;
};
