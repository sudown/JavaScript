function filtrarPorQuantidadeDeDigitos(lista, digitos) {
    let saida = [];
    for (i of lista){
        if (String(i).length == digitos) {
            saida.push(i);
        };
    };
    return (saida);
};