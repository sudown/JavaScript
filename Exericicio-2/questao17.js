function somarNumeros(array) {
    let soma = 0
    for (i of array) {
        soma += i;
    };
    console.log(soma);
};

somarNumeros([1,2,3])