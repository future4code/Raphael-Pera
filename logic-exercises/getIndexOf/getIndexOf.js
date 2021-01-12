function getIndexOf(source, character) {
    var sourceArray = source.split('');
    for (var i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === character)
            return i;
    }
    return -1;
}
console.log(getIndexOf('', 'a'));
