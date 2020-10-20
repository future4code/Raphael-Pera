const verifNums = (num1: number, num2: number): void => {
    const add: number = num1 + num2
    const sub: number = num1 - num2
    const mult: number = num1 * num2
    const max = num1 > num2 ? num1 : num2

    console.log(`soma: ${add}, subtração: ${sub}, multiplicação: ${mult}, maior: ${max}`)
}

verifNums(4,9)