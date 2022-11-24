let frutas = ['Mazana', 'Pera', 'Papaya', 'Jitomate', 'Coco']

console.log(frutas);


console.log('Con ForEach  ////');
let contador = 0;
frutas.forEach(item => {
    console.log(item);
    contador++;
});

console.log('console log con For  ////');
for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
}

console.log('con otro for each  ////');
contador = 0;
for(let item in frutas){
    console.log(frutas[item]);
    contador++;
}

const calificaciones = [100,90,100,99,85,99,99]
let sumatoria = 0;
let promedio=0;
contador = 0;

do {
    sumatoria += calificaciones[contador]
    contador++
} while (contador<calificaciones.length);


promedio = sumatoria/calificaciones.length
console.log('Tu promedio es: ' + promedio);