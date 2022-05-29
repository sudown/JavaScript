function inverso(valor) {
    if (typeof(valor) == 'boolean') {
        return (!valor);
    }
    else {
        return(valor*-1);
    };
};