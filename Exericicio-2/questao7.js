function estaEntre(numero, minimo, maximo, inclusivo) {
    if (inclusivo == true){
        if (numero >= minimo && numero <= maximo) {
            console.log(true);      
        }
        else {
            console.log(false);
        };
    }
    else {
        if (numero > minimo && numero < maximo) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}

estaEntre(3, 150, 3, true)