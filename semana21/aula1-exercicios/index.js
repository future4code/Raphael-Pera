//  EXERCÍCIO 1 -----------------------------------------------
//  Escreva um método que determine se uma string é  'one edit' de outra.

function isOneEdit(stringA, stringB) {
    if (stringA === stringB) {return false}
    if (Math.abs(stringA.length - stringB.length) > 1) {return false}

    const result = stringB.includes(stringA) || stringA.includes(stringB)
    if (result) {return true}

    let count = 0
    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringB[i]) {count += 1}
    }

    return count <= 1
}

console.log(isOneEdit('banank', 'banana'))


//  EXERCÍCIO 2 -----------------------------------------------
//  Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência

function compressString(string) {
    let stringComp = ''

    let i = 0
    while (i < string.length) {
        const char = string[i]
        let num = 1
        
        let f = i + 1
        while (f <= string.length) {
            if (string[f] === char) {
                num++
            } else {
                i = f - 1
                break
            }
            f++
        }

        stringComp += `${char}${num}`
        i++
    }

    return stringComp.length <= string.length ? stringComp : string 
}

console.log(compressString('sammmmmmba'))