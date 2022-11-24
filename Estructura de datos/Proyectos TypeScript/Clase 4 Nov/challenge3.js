// Challenge #3

/**
  1. Use a constrructor function to implement an Electric Car [called EV] as a CHILD "class" of Car. Besides a make and current speed, 
 * the EV also has the current battery charge in % ('charge' property)
 *
 * 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
 *
 * 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like 
 * this: 'Tesla going at 140 km/h, with a charge of 22%';
 *
 * 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what 
 * happens when you 'accelerate'!. 💡HINT: Review the definition of polymorphise
 *
 * DATA CAR 1: 'Tesla' going at 120km/h, with a charge of 23%
 *
 * 😘😘😘
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

EV.prototype = Object.create(Car.prototype);

const EV = function (make, speed, charge){
  Car.call(this,make, speed)
  this.Charge = charge
}

EV.prototype = function ChargeBattery(chargeTo) {
  this.Charge = chargeTo;
  
}

EV.prototype.Accelerate = function () {
  this.Speed += 20;
  this.Charge -=1;
  console.log(`${this.Make} going at ${this.Speed} with charge ${this.Charge}`);
}

const Tesla = new EV('Tesla', 120, 23);
let contador = 0;
do {
  Tesla.Breake();

    contador++;
} while (contador < 5);

//Paso 4 Polimorfismo
