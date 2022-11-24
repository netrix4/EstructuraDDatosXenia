//
/*
    Recreate challenge 1, tho this time using ES6 Classes

    2.- Add a getter called 'SpeedUS' wich returns the current speed in mi/h (Divedes by 1.6)
    
    3.- Add a setter called 'SpeedUS' wich sets the current speed in mi/h (but converts it to 
        kn/h before initialize the velue, by mnultiplying the input by 1.6)
    
    4.- Create a new car and expeirment with the accelerate and brake method, and with the
        getter and setter.
    
    Data Car 1: 'Ford' going at 120 km/h
*/

class Car{
    Speed
    Make
    get SpeedUS() {
        return this.Speed/1.6;
    }
    set SpeedUS(speed){
        this.Speed = speed*1.6;
    }

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
        return this.Make + ' con una velocidad de ' + this.Speed + ' mi/h';
    }
}

const tuga = new Car('Ford', 120); 
let contador = 0;

console.log(tuga.Make + ' al inicio: ' + tuga.Speed);

do {
    tuga.Breake();

    contador++;
} while (contador < 5);

contador = 0;
const speedMPH = tuga.Speed;
console.log(tuga.SpeedUS + 'mi/h');