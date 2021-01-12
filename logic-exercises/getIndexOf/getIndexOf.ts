function getIndexOf(source: string, character: string):number | any {
    const sourceArray = source.split('')
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i] === character) return i 
    }
    return -1
}