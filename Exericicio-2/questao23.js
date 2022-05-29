function contarPalavras(frase) {
    let countPalavras = 0;
    for (i of frase+' ') {
        if (i == ' ') {
            countPalavras++;
        };
    };
    return (countPalavras);
};