function checkParentheses(sentence) {
    var newSentence = sentence.toString();
    if (newSentence.length % 2)
        return false;
    var sentenceArray = newSentence.split('');
    var newArray = sentenceArray.map(function (char) {
        switch (char) {
            case '(':
                return 1;
                break;
            case ')':
                return -1;
                break;
            case '{':
                return 2;
                break;
            case '}':
                return -2;
                break;
            case '[':
                return 3;
                break;
            case ']':
                return -3;
                break;
            default:
                return 0;
                break;
        }
    });
    var openedList = [];
    for (var i = 0; i < newArray.length; i++) {
        var char = newArray[i];
        var opened = openedList[openedList.length - 1];
        if (char > 0) {
            openedList.push(newArray[i]);
        }
        else if (char < 0) {
            if (Math.abs(char) === opened) {
                openedList.pop();
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    return true;
}
console.log(checkParentheses('(})}'));
