// Exercício 1 - Tipagem e Arrays
var valores = [10, 20, 30];
var somaValores = valores.reduce(function (acc, val) { return acc + val; }, 0);
console.log("Soma dos valores:", somaValores);