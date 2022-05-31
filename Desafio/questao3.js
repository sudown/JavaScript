function pa(inicio, razao, elemento) {
    let resp = inicio;
    let count = 1;
    while (count != elemento) {
        resp = resp + razao;
        count++;
    };
    return resp;
};