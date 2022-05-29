function inverter(objeto) {
    let objetoOriginal = objeto;
    let novoObjeto = {};
    let string = '{';
    let c = 0;
    for (i in objetoOriginal) {
        string += objetoOriginal[i]+": "+String(i)+", ";
    
        c++;
    };
    string += '}';
    saida = string.replace(", }","}")
    let obj = JSON.parse(saida);
    return(saida);
    
};