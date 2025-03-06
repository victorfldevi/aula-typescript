interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (x, y) => x * y;

console.log(multiplicar(2, 2));
console.log(multiplicar(10, 5));
console.log(multiplicar(10, 10));