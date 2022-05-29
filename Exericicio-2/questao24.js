function contarCaractere(caracter, string) {
    let count = 0;
    for (i of string) {
        if (i == caracter) {
            count++;
        };
    };
    return (count);
};