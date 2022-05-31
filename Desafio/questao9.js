function linhaDigitavel(codigo) {
    let cod = codigo.split("");
    let cod2 = [];
    let saida = [];
    let codigoFinal = "";
    let sequencia = [4,3,2,9,8,7,6,5,4,3,2,4,3,2,9,8,7,6,5,4,3,2,4,3,2,9,8,7,6,5,4,3,2,4,3,2,9,8,7,6,5,4,3,2];
    let soma = c = 0;
    let dac = 0;
    for (i of cod) {
        cod2.push(parseInt(i));
    };

    for (let i = 0; i < 44;i++) {
        if (c < 11) {
            soma = soma + cod2[i] * sequencia[i];
            saida.push(String(cod2[i]));            
            
        };
        if (c == 10) {
            dac = 11 - (soma % 11);
            dac = dac >= 10 ? dac = 0: dac = dac;
            saida.push("-"+String(dac)+" ");
            soma = 0;
            c = -1;
        };
        c++;
    };


    for (i of saida) {
        codigoFinal += i;
    };

    return codigoFinal;

};