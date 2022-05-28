function buscarPalavrasSemelhantes(palavra, array) {
    let lenPalavra = palavra.length;
    let similar = '';
    let similares = [];
    let c = 0;
    let lenWord = 0;
    let isSimilar = false;
    for (word of array) {
        lenWord = word.length;
        for (i of word) {
            similar += i;
            c++;
            if (isSimilar == true && c == lenWord) {
                similares.push(similar);
            }
            if (c == lenPalavra) {
                if (similar == palavra) {
                    isSimilar = true;
                }
                else {
                    isSimilar = false;
                }
            }
            else if (c == lenWord) {
                c = 0;
                similar = '';
            }
        }
    }
    console.log(similares);
}

buscarPalavrasSemelhantes("pro", ["programacao", "mobile", "profissional"])