// static Hey (){
//     console.log('Hey there');
// }

class Person{
    constructor(name, ageOfBirth){
        this.Name = name;
        this.AgeOfBirth = ageOfBirth
    }
    CalcularEdad(){
        console.log(2022 - this.AgeOfBirth);
    }

}

class Student extends Person{
    Course
    constructor(name, age, course){
        super (name, age)
        this.Course = course
    }
    Introduce(){
        console.log(`Hi, I am ${this.Name} and I am learning ${this.Course}`);
    }
}

const mendez = new Student('Mendez', 2003, 'Estructura de Datos');

mendez.CalcularEdad()
mendez.Introduce()