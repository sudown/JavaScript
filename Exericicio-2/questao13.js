function filtrarNumeros(array) {
    let saida = [];
    for (i of array) {
        if (typeof(i) == 'number') {
            saida.push(i);
        };
    };
    console.log(saida);
};