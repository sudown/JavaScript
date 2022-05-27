function objetoParaArray(objeto) {
    saida = [];
    for (i in objeto) {
        let arrayInterno = [];
        arrayInterno.push(i);
        arrayInterno.push(objeto[i]);
        saida.push(arrayInterno);
    };
    console.log(saida);
};

objetoParaArray({codigo: 11111, preco: 2000});