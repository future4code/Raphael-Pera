const somaDois = (numbers: number[], target: number): number[] | any => {
    for (let i = 0; i < numbers.length; i++) {
        for (let z = 0; z < numbers.length; z++) {
            if (z !== i && numbers[z] + numbers[i] === target) return [i,z]
        }
    }
}