var anagram = function (s, t) {
    var newS = s.split('').sort().join('');
    var newT = t.split('').sort().join('');
    console.log(s, t);
    console.log(newS, newT);
    return newS === newT;
};
console.log(anagram('banana', 'abnana'));
