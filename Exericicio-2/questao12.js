function removerPropriedade(objeto, propriedade) {
    delete objeto.a;
    console.log(objeto);
};

removerPropriedade({a: 1, b:2, c:3}, "a");

//inacabado