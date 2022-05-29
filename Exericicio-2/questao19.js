function calcularMedia(lista) {
    let media = 0;
    for (i of lista) {
        media += i;
    };
    media = media / lista.length;
    return (media);
};