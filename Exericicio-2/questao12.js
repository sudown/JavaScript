function removerPropriedade(objeto, propriedade) {
    delete objeto.a;
    return (objeto);
};

removerPropriedade({a: 1, b:2, c:3}, "a");

//inacabado