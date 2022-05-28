function menorNumero(lista) {
    let menor = 0;
    for (i of lista) {
        if (i < menor) {
            menor = i;
        };
    };
    console.log(menor);
};
menorNumero([3,3,1,0,-4])