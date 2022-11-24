//Object

const PersonProto = {
    init(name, ageOfBirth){
        this.Name = name
        this.AgeOfBirth = ageOfBirth
    },
    calcAge(){
        console.log(2022 - this.AgeOfBirth);
    }
}

const mendez = Object.create(PersonProto);
mendez.init('Mendez', 2003)

// mendez.Name = 'Mendez';
// mendez.ageOfBirth = 2003;

mendez.calcAge()

console.log(mendez);

console.log(mendez.__prot__ === PersonProto);