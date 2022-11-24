const Cuentas = [
    {
        propuietario: 'Mario Arias',
        moviemientos: [10,20,-222,33],
        tasaDeInteres: 9.83,
        pin: '1234'
    },
    {
        propietario: 'Peter Parker',
        moviemientos: [2000,-250,-50],
        tasaDeInteres: 13.1,
        pin: '9900'
    },
    {
        propietario: 'Juan Carlos Bodoque',
        moviemientos: [1800,-350,-55],
        tasaDeInteres: 13.1,
        pin: '2233'
    },
    {
        propietario: 'Juanin Santiago',
        moviemientos: [700,950,7750,-20],
        tasaDeInteres: 13.1,
        pin: '9999'
    }
]

ImprimirMovimientosDeCuenta(Cuentas[0]);

function ImprimirMovimientosDeCuenta(cuentaAImprimir) {
    // let contador = 0;
    // do {
    //     console.log(cuentaAImprimir.moviemientos[contador]);
    //     console.log((cuentaAImprimir.moviemientos[contador]) >=0 ? 'Deposito' : 'Retiro' );
    //     contador ++;
    // } while (contador < cuentaAImprimir.moviemientos.length);
    
    console.log(cuentaAImprimir.moviemientos);
    
    const isDepositoORetiro = cuentaAImprimir.moviemientos.map( item => item >0 ? 'Deposito' : 'Retiro')
    console.log(isDepositoORetiro);
}