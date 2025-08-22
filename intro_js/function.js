function somar(a, b) {
    console.log("operação escolhida: Adição/soma")
    return a + b;

}
function subtrair(a, b) {
    console.log("operação escolhida: subtração")
    return a - b;
}

function multiplicar(a, b) {
    console.log("operação escolhida: Multiplicação")
    return a * b ;
}

function dividir( a, b) {
    console.log("operação escolhida: Divisão");
    return a / b;
    
    
    

}

function calculadora(operação, a, b) { 
    switch (operação) {
        case "somar":
            console.log(somar(a, b ));
            break;
        case "subtrair":
            console.log(subtrair(a, b));
            break;
        case "multiplicar":
            console.log(multiplicar(a,b));
            break;
        case "dividir":
            console.log(dividir(a, b ));
            break;
        default:
            console.log("operação invalida");
            break;
    }
}
calculadora("multiplicar", 10,2);



/*
const dividir = function (a,b){
    return a / b
}

const subtrair = (a, b) => a - b   // arrow func



console.log(somar(50,  50), somar(5, 3), dividir(10,5), subtrair(7,2));
*/
