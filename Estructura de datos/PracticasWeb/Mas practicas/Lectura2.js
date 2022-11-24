// console.log(typeof 2);
// console.log(typeof '2');

// let year = '2022'
// console.log(Number(year) , year);

// //Cohersion
// console.log('Tengo ' + 20 + ' años');
// console.log('23'-'10'- 3);
// console.log('23' / '2');

// let n = '1' + 1
// n = n - 1
// console.log(n);

// console.log(Boolean(1))
// console.log(Boolean('sdfsdhg'))

// console.log(Boolean([]));

const dinero = -1

if (dinero) {
    console.log('Invitame una picsa');
}else{
    console.log('Trabaja ');
}

let altura = null;
if (altura) {
    console.log('Mi altura es alta');
} else {
    console.log('a');
}

// == vs ===

const edad = '18'
if (edad === 18) {
    console.log('YA puedes ir al papas');
}
if (edad == 18) {
    console.log('YA puedes ir al papas con id fake');
}

const numero_favorito = prompt('Hey, ¿cuál es tu número favorito?')
console.log(numero_favorito);

const numFav = Number(numero_favorito)

if ( numFav !== 13) {
    console.log('Es el numero de la suerte!');
}else{
    console.log('Nos vemos!');
}