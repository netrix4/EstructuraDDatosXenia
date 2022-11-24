// crea una clase animal que tenga las siguiente propiedades

// nombre 
// num pata
//  num ojos 
//  alas 
//  vuela

// Crea dos animales
// -Gato
// -Aguila

// Agregar en el prototipo las especie

// Agregar la propiedad masa en kg

//Agregar al prototipo  el peso (N) - se debe calcular antes -

class Animal{
    Nombre
    NumPatas
    NumOjos 
    Alas 
    Vuela
    // Desde prototipo 
    //Masa
    constructor(nombre, numPatas, numOjos, alas, vuela){
        this.Nombre = nombre;
        this.NumPatas = numPatas;
        this.NumOjos = numOjos;
        this.Alas = alas;
        this.Vuela = vuela;
    }

}

Animal.prototype.CalcularPeso = function CalcularPeso() {
    this.Peso = this.Masa * 9.789;    
}

const michi = new Animal('Bola De Nieve', 4, 2, false, false);
const america = new Animal('Freedom', 2, 2, true, true);

console.log('Animales antes de la mutacion de prototipo:');
console.log(america, michi);

//Con cuidado de cuando modificar el protipo que puede no existir dependiendo de cuando
Animal.prototype.Masa = 0;
Animal.prototype.Especie = '';

america.Masa = 7.2;
michi.Masa = 6.1;
michi.Especie = 'Felino';
america.Especie = 'Ave';

michi.CalcularPeso();
america.CalcularPeso();

console.log('Pesos en N de los animales:\nMichi: ' + michi.Peso + ' (N)\nAmerica: ' + america.Peso + ' (N)');
console.log('\nEspecies de los animales:\nMichi: ' + michi.Especie + '\nAmerica: ' + america.Especie);