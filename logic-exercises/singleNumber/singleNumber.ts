function singleNumber (numberList: number[] | any): number | string {
    if (numberList.length <= 0) {console.log('Lista vazia!'); return 'Lista vazia!'}
    
    let result: number | string

    numberList.sort((a: any, b: any) => a-b)

    for (let i = 0; i < numberList.length; i++) {
        const actualNumber: number = Number(numberList[i])
        const prevNumber: number = Number(numberList[i - 1])
        const nextNumber: number = Number(numberList[i + 1])

        if (isNaN(actualNumber)) {
            result = 'A lista deve conter apenas números!'
        } else if (actualNumber !== prevNumber && actualNumber !== nextNumber) {
            result = actualNumber
        }

        result = result || 'Nenhum número solitário na lista'
    }
    return result
}
