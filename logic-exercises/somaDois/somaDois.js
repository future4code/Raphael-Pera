var somaDois = function (numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        for (var z = 0; z < numbers.length; z++) {
            if (z !== i && numbers[z] + numbers[i] === target)
                return [i, z];
        }
    }
};
