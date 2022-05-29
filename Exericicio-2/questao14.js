function objetoParaArray(objeto) {
    saida = [];
    for (i in objeto) {
        let arrayInterno = [];
        arrayInterno.push(i);
        arrayInterno.push(objeto[i]);
        saida.push(arrayInterno);
    };
    return (saida);
};