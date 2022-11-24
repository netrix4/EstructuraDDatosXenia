export default class Persona{
    Nombre
    Altura
    Peso
    IMC
    constructor(nombre, altura, peso) {
        this.Nombre = nombre;
        this.Altura = altura;
        this.Peso = peso
    }
    CalculaIMC(){
        this.IMC = this.Peso / (this.Altura * this.Altura);
    }
}