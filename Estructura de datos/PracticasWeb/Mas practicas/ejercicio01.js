// // // let pais = 'México';
// // // let continente = 'América'
// // // let poblacion = 100

// // // console.log(pais, continente, poblacion)

// // // /* agrega una nueva vatraible que se llame esIsla */

// // // const isIsland = false
// // // let lenguaje = 'Español'
// // // var gentilicio = 'Mexicanos'

// // // console.log('Tipo de dato de pais: ', typeof(pais));
// // // console.log('Tipo de dato de continente: ', typeof(continente));
// // // console.log('Tipo de dato de poblacion: ', typeof(poblacion));
// // // console.log('Tipo de dato de isIsland: ', typeof(isIsland));

// // // /* convertir lenguaje e isIsland a var globales */

// // // console.log(isIsland);
// // // console.log(poblacion/2);

// // // const SumarDosNummeros = (numeroUno, numeroDos) => {
// // //     return (numeroUno + numeroDos)
// // // }
// // // console.log(SumarDosNummeros(7,99)); 
// // // console.log(SumarDosNummeros)

// // /*

// // Desafio 01 - LAB01
// //     Jean y Pau estan tratando de compara su IMC (indeice de masa muscular),
// //     donde la formula para popder calcularla es: IMC = pesoKg / altura^2

// //     1. Almacena el valor de Jean y Pau en variables (masa  y altura)
// //     2. Calcula el IMV usando la formula ()
// //     3. Crea una variable boleana llamda jeanMaxIMC donde se mostrara que 
// //     Jean tendra el IMC mas alto que Pau
    
// //     Datso de prueba 1: PAciente Jean, peso 78kg y 1.69 altura
// //     Pau tiene un peso de 92kg y una altura de 1.95m

// //     Datos de prueba 2: PAciente Jean, peso 95kg y una altura de 1.88m,
// //     Pau tien un peso de 85 kg y una altura de 1.76

// // */

// // let pesoJean = 78;
// // let alturaJean = 1.69;

// // let pesoPau = 92;
// // let alturaPau = 1.95;

// // let jeanMaxIMC = false;

// // const CalcularIMC = (peso, altura) => {
// //     let alturaCuadrado = altura*altura; 
// //     return(peso/alturaCuadrado);
// // }

// // const IsJeanIMCThanPaus = (jeansIMC, pausIMC) =>{
// //     if (jeansIMC > pausIMC) {
// //         return true
// //     } else {
// //         return false
// //     }
// // }

// // let JeansIMC = CalcularIMC(pesoJean, alturaJean)
// // let PausIMC = CalcularIMC(pesoPau, alturaPau)

// // jeanMaxIMC = IsJeanIMCThanPaus(JeansIMC,PausIMC);
// // console.log("-- Caso 1 --");
// // console.log('Pau peso y altura: ', pesoPau, ', ', alturaPau);
// // console.log('Jean peso y altura: ', pesoJean, ', ', alturaJean);

// // console.log('El IMC de Jean es mayor? : ', jeanMaxIMC);

// // pesoJean = 95;
// // alturaJean = 1.88;
// // pesoPau = 85;
// // alturaPau = 1.76;
// // jeanMaxIMC = false;

// // JeansIMC = CalcularIMC(pesoJean, alturaJean)
// // PausIMC = CalcularIMC(pesoPau, alturaPau)

// // jeanMaxIMC = IsJeanIMCThanPaus(JeansIMC,PausIMC);
// // console.log("-- Caso 2 --");
// // console.log('Pau peso y altura: ', pesoPau, ', ', alturaPau);
// // console.log('Jean peso y altura: ', pesoJean, ', ', alturaJean);

// // console.log('El IMC de Jean es mayor? : ', jeanMaxIMC);

// console.log('-- Aquí empezamos con clases --');

// import {Persona} from "./modules/Persona.js";

// let Jean = new Persona ("Jean", 1.69, 78);
// let Pau = new Persona ("Pau", 1.95, 92);

// Jean.CalculaIMC();
// Pau.CalculaIMC();

// console.log('Caso 1');
// console.log(Jean);
// console.log(Pau);

// console.log('Hecho con operador ternario');
// console.log(Jean.IMC > Pau.IMC ? 'El IMC de Jean es mayor' : 'El IMC de Jean es menor');

// Jean = new Persona("Jean", 1.88, 95);
// Pau = new Persona("Pau", 1.76, 85)

// Jean.CalculaIMC();
// Pau.CalculaIMC();

// console.log('Caso 2');
// console.log(Jean)
// console.log(Pau)

// console.log('Hecho con operador ternario');
// console.log(Jean.IMC > Pau.IMC ? 'El IMC de Jean es mayor' : 'El IMC de Jean es menor');

import Persona from "./modules/Persona.js";

let Raza = [new Persona("Jean", 1.69, 78), new Persona("Pau", 1.95, 92)]
console.log('Caso 1');

Raza.forEach(item => {
    item.CalculaIMC()
    console.log(item);
});

console.log(Raza[0].IMC > Raza[1].IMC ? 'El IMC de Jean es mayor' : 'El IMC de Jean es menor');

Raza = [new Persona("Jean", 1.88, 95), new Persona("Pau", 1.76, 85)]

console.log('Caso 2');

Raza.forEach(item => {
    item.CalculaIMC()
    console.log(item);
});

console.log(Raza[0].IMC > Raza[1].IMC ? 'El IMC de Jean es mayor' : 'El IMC de Jean es menor');