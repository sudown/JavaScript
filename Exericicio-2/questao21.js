function menorNumero(lista) {
    let menor = 0;
    for (i of lista) {
        if (i < menor) {
            menor = i;
        };
    };
    return (menor);
};