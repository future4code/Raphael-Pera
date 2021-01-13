function checkParentheses(sentence: any): boolean {
    const newSentence = sentence.toString()
    if (newSentence.length % 2) return false
    
    const sentenceArray: string[] = newSentence.split('')

    const newArray: number[] = sentenceArray.map(char => {
        switch (char) {
            case '(': return 1; break;
            case ')': return -1; break;
            case '{': return 2; break;
            case '}': return -2; break;
            case '[': return 3; break;
            case ']': return -3; break;
            default: return 0; break;
        }
    })

    let openedList: number[] = []
    for (let i: number = 0; i < newArray.length; i++) {
        const char: number = newArray[i]
        const opened: number = openedList[openedList.length -1]
        if (char > 0) {
            openedList.push(newArray[i])
        } else if (char < 0) {
            if (Math.abs(char) === opened) {
                openedList.pop()
            } else {
                return false
            }
        } else {
            return false
        }
    }
    return true
}
