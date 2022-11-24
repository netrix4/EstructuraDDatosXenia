    // Elabora un prgrama que cuando sea multiplo de 3 escriba la palabra 'buzz'
    // cuando sea multiplo de 5 la palabra 'Fizz', de los primeros 100 numeros

let contador = 1;
let residuo = 0;
let numeros = [];

do {
    numeros[contador] = contador;
    console.log(numeros[contador]);
    
    residuo = numeros[contador] % 3
    if (residuo === 0) {
        console.log('Buzz, multiplo de 3');
    }

    residuo = numeros[contador] % 5
    if (residuo === 0) {
        console.log('Fizz, multiplo de 5');
    }
    
    contador++;
} while (contador <= 100);

contador = 1;

function SumarDosNueros(numeroUno, numerosDos) {
    return numeroUno + numerosDos
}

console.log(SumarDosNueros(6453, 80472));

mensaje = (SumarDosNueros) => {
    console.log(SumarDosNueros(1,2));
}
