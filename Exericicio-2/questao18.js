function despesasTotais(array) {
    let soma = 0;
    for (objeto of array) {
        for (chave in objeto){
            if (chave == 'preco') {
                soma = soma + objeto[chave];
            };
        };
    };
    return (soma);
};