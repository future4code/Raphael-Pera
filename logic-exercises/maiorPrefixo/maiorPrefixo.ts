function maiorPrefixo(wordList: string[]): string | any {
    const word: string = wordList[0]
    let prefixo: string = ''
    for (let i = 1; i <= word.length; i++) {
        prefixo = word.substring(0, i)
        for (let z = 1; z < wordList.length; z++) {
            const prefixoTest = wordList[z].substring(0, i)
            if (prefixoTest !== prefixo) return word.substring(0, i - 1)
        }
    }
    return prefixo
}