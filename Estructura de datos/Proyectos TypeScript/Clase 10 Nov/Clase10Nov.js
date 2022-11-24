
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
        return this.Make + ' con una velocidad de ' + this.Speed + ' km/h';
    }
}
class EV extends Car{
    #_charge
    getCharge() {
        return this.#_charge
    }
    ModificarCarga(charge){
        this.#_charge = charge;
    }
    constructor(make, speed, charge){
        super(make, speed)
        this.ModificarCarga(charge)
    }
    ChargeBattery(chargeTo){
        this.ModificarCarga(chargeTo)
    }
    Accelerate(){
        this.Speed += 20;
        this.DecreaseCharge();
        console.log(`${this.Make} going at ${this.Speed} with charge ${this.getCharge()}`);
    }
    
    DecreaseCharge(){
        this.#_charge -= 1;
    }

}
const Tesla = new EV('Tesla', 120, 23);
let contador = 0;

console.log(Tesla.getCharge());
Tesla.Accelerate();
console.log(Tesla.getCharge());

// do {
//     Tesla.Breake();

//     contador++;
// } while (contador < 5);
