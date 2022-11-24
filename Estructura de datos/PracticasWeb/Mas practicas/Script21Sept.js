
const MoviemientosPeso = [2,-5,10,8]

const dolarAPeso = 19.5

const movimientos = MoviemientosPeso.map(
    function (mov) {
        return mov * dolarAPeso;
    }
)

const movimientosReducidos = MoviemientosPeso.map( mov => mov * dolarAPeso)
//Apuntes de examen ^^^^

console.log(movimientosReducidos);

const descripcionMovimientos = movimientosReducidos.map(
    (mov,i,arr) => {
        if (mov > 0) {
            return `Movimiento  ${i+1}: Depositaste ${mov} pesos`
        }
        else{
            console.log(`Movimiento ${i+1}: no efectuado ${Math.abs(mov)}`);
        }
    }
)
console.log(descripcionMovimientos);