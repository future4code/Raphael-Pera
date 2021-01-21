const negativeNumbers = (numbers: number[][]): number => {
    let negativeCount: number = 0

    for (let i =0; i < numbers.length; i++) {
        const array: number[] = numbers[i]
        for (let z = 0; z < array.length; z++) {
            if (array[z] < 0) negativeCount++
        }
    }

    return negativeCount
}
