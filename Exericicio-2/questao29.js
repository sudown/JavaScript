function segundoMaior(lista) {
    let maiorNumero = 0;
    let segundoMaiorNumero = 0;
    for (i in lista) {
        if (lista[i] > maiorNumero) {
            maiorNumero = lista[i];
            posMaiorNumero = i;
        };
    };
    
    lista.splice(posMaiorNumero, 1);
    return (lista);
    for (i of lista) {
        if (i > segundoMaiorNumero) {
            segundoMaiorNumero = i;
        };
    };
    return (segundoMaiorNumero);
};