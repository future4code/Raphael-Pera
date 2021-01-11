function missingNumber(arr: number[]):number | null {
    const newArr: number[] = arr.sort()
    for (let i = 1; i < newArr.length;i++) {
        if (newArr[i] !== newArr[i-1] + 1) return newArr[i] -1
    }
    return null
}
