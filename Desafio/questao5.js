function saque(valor) {
    let quantia = valor;
    let sacado = 0;
    let cedulas = [100, 50, 20, 10, 5, 2];
    let ValorEmCedulasSacadas = 0;
    let saida = {R$100: 0,R$50: 0, R$20: 0, R$10: 0, R$5: 0, R$2: 0};

    if (quantia >= 100) {
        notas = (quantia / 100);
        ValorEmCedulasSacadas = 100 * Math.trunc(notas);
        sacado += ValorEmCedulasSacadas;
        saida.R$100 = Math.trunc(notas);
        quantia -= ValorEmCedulasSacadas;
        
    };

    if (quantia < 100 && quantia >= 50) {
        notas = (quantia / 50);
        ValorEmCedulasSacadas = 50 * Math.trunc(notas);
        sacado += ValorEmCedulasSacadas;
        saida.R$50 = Math.trunc(notas);
        quantia -= ValorEmCedulasSacadas;
        
    };
    
    if (quantia < 50 && quantia >= 20) {
        notas = (quantia / 20);
        ValorEmCedulasSacadas = 20 * Math.trunc(notas);
        sacado += ValorEmCedulasSacadas;
        saida.R$20 = Math.trunc(notas);
        quantia -= ValorEmCedulasSacadas;        
    };

    if (quantia < 20 && quantia >= 10) {
        notas = (quantia / 10);
        ValorEmCedulasSacadas = 10 * Math.trunc(notas);
        sacado += ValorEmCedulasSacadas;
        saida.R$10 = Math.trunc(notas);
        quantia -= ValorEmCedulasSacadas;        
    };
 
    if (quantia < 10 && quantia >= 5) {
        notas = (quantia / 5);
        ValorEmCedulasSacadas = 5 * Math.trunc(notas);
        sacado += ValorEmCedulasSacadas;
        saida.R$5 = Math.trunc(notas);
        quantia -= ValorEmCedulasSacadas;        
    };

    if (quantia < 5 && quantia >= 2) {
        notas = (quantia / 2);
        ValorEmCedulasSacadas = 2 * Math.trunc(notas);
        sacado += ValorEmCedulasSacadas;
        saida.R$2 = Math.trunc(notas);
        quantia -= ValorEmCedulasSacadas;        
    };

    if (valor == 0) {
        saida = {}
        return saida; 
    }

    else {
        if (sacado == valor) {
            return saida;
        }
        else {
            saida = {};
            return saida;
        };
    };
    
};

console.log(saque());