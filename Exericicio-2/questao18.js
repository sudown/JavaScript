function despesasTotais(array) {
    let soma = 0;
    for (objeto of array) {
        for (chave in objeto){
            if (chave == 'preco') {
                soma = soma + objeto[chave];
            };
        };
    };
    console.log(soma);
};

despesasTotais([{nome: "jornal", categoria: "informação", preco: 3},
                {nome: "cafe", categoria: "alimento", preco: 3}
])