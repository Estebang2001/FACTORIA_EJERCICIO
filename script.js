/* Factorial()
En este ejercicio, deberás crear una Función factorial que reciba un número y devuelva el factorial de este número.

Por ejemplo, si hacemos factorial(5) la Función deberá hacer la operación 5x4x3x2x1 y devolver el resultado: 120. */

let num = parseFloat(prompt("Hola, digita porfa un numero entero positivo"));

function factorizar(num, fnCallback) {
    let resultado = 1;
    let i = 1;

    while (i <= num) {
        resultado = resultado * i;
        i++;
    }

    return fnCallback(resultado); 
}

let ftFactorizar = (resultado) => {
    console.log(`El resultado del factorial es: ${resultado}`);
    
};

factorizar(num, ftFactorizar);