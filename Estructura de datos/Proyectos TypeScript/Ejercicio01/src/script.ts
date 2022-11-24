console.log('Listas Enlazadas');

class Corredor {
    Nombre : string = '';
    Edad : string = '';
    Correo : string = '';

    constructor(nombre : string, edad : string, correo : string) {
        this.Nombre = nombre;
        this.Edad = edad;
        this.Correo = correo
    }

}

let listaCorredores = Array<Corredor>();

const recuperaValores = () =>{
    const nombre : HTMLInputElement | null = document.getElementById('nombreInput') as HTMLInputElement;
    const edad: HTMLInputElement | null = document.getElementById('edadInput') as HTMLInputElement;
    const correo: HTMLInputElement | null = document.getElementById('emailInput') as HTMLInputElement;

    return new Corredor (nombre?.value, edad?.value, correo?.value);
}

const registrarCorredores = () => {
    const corredorTemp : Corredor = recuperaValores();

    const option: HTMLOptionElement | null = document.getElementById('ddInsercion') as HTMLOptionElement;
    console.log(option.value);

    switch (option.value) {
        case 'Principio':
            listaCorredores = agregarNodoAlPrincipio(corredorTemp);
            
            break;
        case 'Medio':
            listaCorredores = agregarNodoEnMedio(corredorTemp);
            
            break;
        case 'Final':
            listaCorredores = agregarNodoAlFinal(corredorTemp);
            
            break;
        default:
            alert('Seleccione una opcion valida');
            break;
    }

    crearElementosDeCorredores(listaCorredores);
    limpiarTextBoxes();
    
    // listaCorredores.forEach(item =>{
    //     console.log(item);
    // })
    console.log(listaCorredores);

}

const crearElementosDeCorredores = (corredores : Array<Corredor>) => {
    let  contentDiv = document.getElementById('listContainer');

    // const nuevoElementoCorredor : Array<HTMLElement> = [document.createElement("p")];
    
    corredores.forEach(item => {
        let nuevoElementoCorredor = document.createElement('p');
        let nuevoCorredorBoton = document.createElement('button');

        nuevoCorredorBoton.textContent = 'Editar';
        nuevoCorredorBoton.type = 'button';

        let indexItem = listaCorredores.findIndex((item) => item === item);
        nuevoCorredorBoton.id = 'btnEditar' + indexItem;
        console.log(indexItem);
        nuevoElementoCorredor.textContent = item.Nombre + ' ' + item.Edad + ' ' + item.Correo + ' ';
        nuevoElementoCorredor.id = 'Corredor ' + item.Edad;

        nuevoElementoCorredor?.replaceChildren(nuevoCorredorBoton);
        contentDiv?.replaceChildren(nuevoCorredorBoton);

    });

    // nuevoCorredorBoton.id = 'btnEditar';
    // nuevoCorredorBoton.textContent = 'Editar';
    // nuevoCorredorBoton.type = 'button';

    //nuevoCorredorBoton.onclick = limpiarTextBoxes;

    // nuevoElementoCorredor.textContent = corredor.Nombre + ' ' + corredor.Edad + ' ' + corredor.Correo + ' ';
    // nuevoElementoCorredor.id = 'Corredor ' + corredor.Edad;

    // nuevoElementoCorredor?.appendChild(nuevoCorredorBoton);
    // contentDiv?.appendChild(nuevoElementoCorredor);
}
const limpiarTextBoxes = () => {
    const nombre : HTMLInputElement | null = document.getElementById('nombreInput') as HTMLInputElement;
    const edad : HTMLInputElement | null = document.getElementById('edadInput') as HTMLInputElement;
    const correo : HTMLInputElement | null = document.getElementById('emailInput') as HTMLInputElement;
    const option: HTMLOptionElement | null = document.getElementById('ddInsercion') as HTMLOptionElement;

    nombre.value = '';
    edad.value = '';
    correo.value = '';
    option.value = 'Final';

}

const LogAConsola = () => {
    console.log('Desde boton');
    
}

const agregarNodoAlPrincipio = (nuevoCorredor: Corredor) => {
    const nuevoArray : Array<Corredor> = [nuevoCorredor, ...listaCorredores]
    return nuevoArray;
}
const agregarNodoEnMedio = (nuevoCorredor: Corredor) => {
    const nuevoArray : Array<Corredor> = [...listaCorredores, nuevoCorredor, ...listaCorredores]
    return nuevoArray;
}
const agregarNodoAlFinal = (nuevoCorredor: Corredor) => {
    const nuevoArray : Array<Corredor> = [...listaCorredores, nuevoCorredor]
    return nuevoArray;
}