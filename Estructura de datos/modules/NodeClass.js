export default class Persona{
    Nombre
    Altura
    Peso
    ColorFavorito
    constructor(nombre, altura, peso) {
        this.Nombre = nombre;
        this.Altura = altura;
        this.ColorFavorito = 'Ninguno';
    }
    HacerEjercicio(){
        console.log('Estoy haciendo ejercicio');
        this.Peso += 1;
    }
}