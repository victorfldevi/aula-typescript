interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "Volkswagen",
    modelo: "Polo",
    ano: 2025,
    motor: "v8"
}

console.log(
    `Marca: ${meuCarro.marca}\n` +
    `Modelo: ${meuCarro.modelo}\n` +
    `Ano: ${meuCarro.ano}\n` +
    `Motor: ${meuCarro.motor}\n`
)