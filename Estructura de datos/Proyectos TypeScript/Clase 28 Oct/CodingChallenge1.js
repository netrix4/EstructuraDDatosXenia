// Coding challnege #1

/*

    1 use a constructor function to implement a Car. A car has make an a speed property. The speed porperty is the current speed
    of itsel in km/h

    2 Implement a 'accelerate' method that will increase tyhe cars speed by 10, and log the new speed to the console

    3 Implement a 'brake' method that will decrease the cars speed by 5, and log the new speed to the console

    4 Create 2 car objects and experiment with calling Accelerate and brake method multiple times on each of them

    DATA CAR 1: 'BMW' going at 120 km/h
    data car 2: Mercedes, going at 85 km/h
*/

class Car{
    Speed
    Make

    constructor(make, speed){
        this.Speed = speed;
        this.Make = make;
    }
    Accelerate(){
        this.Speed += 10;
    }
    Breake(){
        this.Speed -= 5;
    }
    ToString(){
        return this.Make + ' con una velocidad de ' + this.Speed + ' km/h';
    }
}

console.log('Coding challnege #1');

const beme = new Car('BMW', 120);
const mechita = new Car('Mercedes', 85);
let contador = 0;

console.log('BMW al inicio: ' + beme.Speed);
console.log('Mercedes al inicio: ' + mechita.Speed);

do {
    beme.Breake();
    mechita.Breake();
    contador++;
} while (contador < 5);
contador = 0;
console.log(beme.ToString());;
console.log(mechita.ToString());;



