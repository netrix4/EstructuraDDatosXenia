// let Persona = {
//     Nombre: 'Clark Kent',
//     Edad : 25,
//     Genero : 'Masculino'
// }

// console.log(Persona.Nombre);
// let {nombre} = Persona
// nombre = 'Pepito Mora'
// console.log(nombre);
// console.log(Persona.Nombre);
// //Crea una copia de un campo

// Persona.SuperPoder = 'Velocidad'
// delete Persona.Edad

// console.log(Persona);

let personas = [
    {
        Nombre: 'Tim McAllen',
        Edad : 22,
        Genero : 'Si'
    },
    {
        Nombre: 'Justino Justo',
        Edad : 99,
        Genero : 'no definido'
    },
    {
        Nombre: 'Chuy Marlboro',
        Edad : 1,
        Genero : 'Masculino'
    },
    {
        Nombre: 'juan',
        Edad : 13,
        Genero : 'Femenino'
    },
    {
        Nombre: 'Carl Sagan',
        Edad : 55,
        Genero : 'Masculino'
    }
]

// console.log(personas);
// console.log('Solucion 1: \n');
personas.forEach(item => {
    item.GradoDeEstudios = ['Primaria', 'Secuandaria', 'Prepa'];
    //console.log(item.Nombre);

});

// console.log('Solucion 2: \n');
// console.log(personas[3].Nombre, personas[3].Edad);

// console.log('Solucion 3: \n');
// const mujeres = personas.filter(item =>{
//     return item.Genero === 'Femenino';
    
// })

// mujeres.forEach(element => {
//     console.log(element.Nombre); 
// });

//Prueba

const secundarinos = personas.filter(item => {
    return item.GradoDeEstudios.lengh < 3;
    
})

console.log(secundarinos);