//  class expression

//const PersonaCL = class()

//Class declaration

class Person{
    constructor(name, ageOfBirth){
        this.Name = name;
        this.AgeOfBirth = ageOfBirth
    }
    CalcularEdad(){
        console.log(2022 - this.AgeOfBirth);
    }

}

const mendez = new Person('Mendez', 2003);
console.log(mendez);

const account = {
    owner: 'Xenia',
    movements : [200,530,120,300],
    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(item){
        this.movements.push(item);
    }
}

console.log(account.latest);
account.latest = 99
console.log(account.movements);

