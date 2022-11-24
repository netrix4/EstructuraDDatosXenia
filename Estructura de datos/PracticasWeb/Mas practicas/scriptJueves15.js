// const superHeroes = ['Chapulin', 'Capt', 'Batman', 'Flash']

// superHeroes.map(function (item){
//     console.log(item);
// })

// superHeroes.map(item => {
//     console.log(item);
//     console.log("ñ");
// })

// const superHeroe = {
//     nombre : 'Peter Parker',
//     nickName : 'Spiderman'
// }
// console.log(superHeroe.nickName);

//Practica de laboratorio
//elabora una lista de heroes
//e imprime su nombre y superpoder

let SuperPersonas = [
    [
        {
            Nombre: 'Peter Parker',
            Alias: 'Spiderman',
            SuperPoder: 'Juerte y telarana',
            Edad: '99'
        },
        {
            Nombre: 'Bruce Wayne',
            Alias: 'Batman',
            SuperPoder: 'Juerte y dinero',
            Edad: '44'
        },
        {
            Nombre: 'Barry Allen',
            Alias: 'Flash',
            SuperPoder: 'Juerte y rapido',
            Edad: '22'
        }
    ],
    [
        {
            Nombre: 'Greg',
            Alias: 'DrDoom',
            SuperPoder: 'Juerte',
            Edad: '50'
        },
        {
            Nombre: 'Osborne',
            Alias: 'GreenGoblin',
            SuperPoder: 'Juerte',
            Edad: '60'
        },
        {
            Nombre: 'Tyron',
            Alias: 'Electro',
            SuperPoder: 'Los calambres',
            Edad: '100'
        }
    ]
]

SuperPersonas.map(item => {
    console.log(item);
})