function calcularMedia(lista) {
    let media = 0;
    for (i of lista) {
        media += i;
    };
    media = media / lista.length;
    console.log(media);
};

calcularMedia([1,1,2,3,5,8,13]);