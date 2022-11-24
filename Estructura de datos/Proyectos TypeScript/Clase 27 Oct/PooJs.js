'use strict';

let Persona = function (nombre, anioNacimiento) {
    this.Nombre = nombre;
    this.anioNacimiento = anioNacimiento;
};

Persona.prototype.calcAge = function(){
    console.log('La edad de ' + this.Nombre + ' es: ' + (2022 - this.anioNacimiento));
}

let cinthya = new Persona('Cinthya', 1999);
let mary = new Persona('Mary', 1997);
const fernanda = 'Fernanda';
let juanes = new Persona('Juanes Cutia', 1997);
let batman = new Persona('Bruce', 1991);


// objeto instanceOf Clase -> para saber si es un objeto de la clase n
console.log(Persona.prototype.isPrototypeOf(fernanda));

Persona.prototype.species = 'Homo sapiens';

juanes.calcAge();
console.log(juanes.species);

const numeros = new Array();

console.log(numeros.__proto__);
console.log(cinthya.__proto__);

const h1 = document.getElementById('h1');
console.log(h1);
