const anagram = (s: string, t: string): boolean => {
    const newS = s.split('').sort().join('')
    const newT = t.split('').sort().join('')
    return newS === newT
}