// Exercício 3 - Classe e Instância
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro.prototype.detalhes = function () {
        return "".concat(this.marca, " ").concat(this.modelo, ", Ano: ").concat(this.ano);
    };
    return Carro;
}());
var carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());
