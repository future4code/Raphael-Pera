function maiorPrefixo(wordList) {
    var word = wordList[0];
    var prefixo = '';
    for (var i = 1; i <= word.length; i++) {
        prefixo = word.substring(0, i);
        for (var z = 1; z < wordList.length; z++) {
            var prefixoTest = wordList[z].substring(0, i);
            if (prefixoTest !== prefixo)
                return word.substring(0, i - 1);
        }
    }
    return prefixo;
}
var wordList = ["coracao", "cor", "corona", "coreia"];
wordList = ["flower", "flow", "flight"];
// wordList = ['abacate', 'abacateba', 'abacates', 'abacateira', 'abacateiro']
console.log(maiorPrefixo(wordList));
