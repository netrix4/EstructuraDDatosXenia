let variables = 9
const constante = 'pruebaxd'
console.log(constante)
console.log(typeof(constante))

if ('10'==10) {
    console.log('Somos iguales')
}

/* {} objetos */
/* [] listas */ 

let comida = ['arroz' , 'buebito' , 'pan']
comida.push('bistek')

console.log(comida)
console.log(comida.length)

let gg = comida.pop();
console.log(gg)

comida.unshift('Chunkun')
console.log(comida)

let indexBuebito = comida.indexOf('arroz')

console.log(indexBuebito)

if (indexBuebito >= 0) {
    console.log('Si encontré elemento')
    
}
else{
    console.log('No encotré el elemento')
}