function removerVogais(palavra) {
    let saida = '';
    for (i of palavra) {
        if (i != 'a' && i != 'A' && i != 'e' && i != 'E' && i != 'i' &&  i != 'I' &&  i != 'o' &&  i != 'O' &&  i != 'u' &&  i != 'U') {/*;*/
            saida += i;
        };
    };
    return (saida);
};