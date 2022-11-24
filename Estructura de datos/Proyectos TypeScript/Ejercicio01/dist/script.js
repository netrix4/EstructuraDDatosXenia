"use strict";
console.log('Listas Enlazadas');
class Corredor {
    constructor(nombre, edad, correo) {
        this.Nombre = '';
        this.Edad = '';
        this.Correo = '';
        this.Nombre = nombre;
        this.Edad = edad;
        this.Correo = correo;
    }
}
let listaCorredores = Array();
const recuperaValores = () => {
    const nombre = document.getElementById('nombreInput');
    const edad = document.getElementById('edadInput');
    const correo = document.getElementById('emailInput');
    return new Corredor(nombre === null || nombre === void 0 ? void 0 : nombre.value, edad === null || edad === void 0 ? void 0 : edad.value, correo === null || correo === void 0 ? void 0 : correo.value);
};
const registrarCorredores = () => {
    const corredorTemp = recuperaValores();
    const option = document.getElementById('ddInsercion');
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
};
const crearElementosDeCorredores = (corredores) => {
    let contentDiv = document.getElementById('listContainer');
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
        nuevoElementoCorredor === null || nuevoElementoCorredor === void 0 ? void 0 : nuevoElementoCorredor.replaceChildren(nuevoCorredorBoton);
        contentDiv === null || contentDiv === void 0 ? void 0 : contentDiv.replaceChildren(nuevoCorredorBoton);
    });
    // nuevoCorredorBoton.id = 'btnEditar';
    // nuevoCorredorBoton.textContent = 'Editar';
    // nuevoCorredorBoton.type = 'button';
    //nuevoCorredorBoton.onclick = limpiarTextBoxes;
    // nuevoElementoCorredor.textContent = corredor.Nombre + ' ' + corredor.Edad + ' ' + corredor.Correo + ' ';
    // nuevoElementoCorredor.id = 'Corredor ' + corredor.Edad;
    // nuevoElementoCorredor?.appendChild(nuevoCorredorBoton);
    // contentDiv?.appendChild(nuevoElementoCorredor);
};
const limpiarTextBoxes = () => {
    const nombre = document.getElementById('nombreInput');
    const edad = document.getElementById('edadInput');
    const correo = document.getElementById('emailInput');
    const option = document.getElementById('ddInsercion');
    nombre.value = '';
    edad.value = '';
    correo.value = '';
    option.value = 'Final';
};
const LogAConsola = () => {
    console.log('Desde boton');
};
const agregarNodoAlPrincipio = (nuevoCorredor) => {
    const nuevoArray = [nuevoCorredor, ...listaCorredores];
    return nuevoArray;
};
const agregarNodoEnMedio = (nuevoCorredor) => {
    const nuevoArray = [...listaCorredores, nuevoCorredor, ...listaCorredores];
    return nuevoArray;
};
const agregarNodoAlFinal = (nuevoCorredor) => {
    const nuevoArray = [...listaCorredores, nuevoCorredor];
    return nuevoArray;
};
