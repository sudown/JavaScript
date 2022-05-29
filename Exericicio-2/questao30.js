function recerberMelhorEstudante(estudantes) {
    let melhorAluno = '';
    let melhorMedia = -1;
    let soma = 0;
    let pos = -1;
    for (notas in estudantes) {
        c = 1;
        for (i of estudantes[notas]) {
            soma += i;
            if (c == 4) {
                media = soma / 4;
                if (media > melhorMedia) {
                    melhorMedia = media;
                    pos++;
                    soma = 0;
                    c = 0;
                };
            };
            c++;
        };
    };
    c = 0;
    for (i in estudantes) {
        if (c == pos) {
            saida = {nome : i, media: melhorMedia}
            break;
        }
        c++;
    };
    return (saida);
};