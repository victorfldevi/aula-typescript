type Estudante = {
    nome: string,
    curso: string
};

type Trabalhador = {
    empresa: string,
    cargo: string
};

type EstudanteTrabalhador = Estudante & Trabalhador;

const usuario2: EstudanteTrabalhador = {
    nome: "Roberto",
    curso: "Engenharia de Software",
    empresa: "Avon",
    cargo: "Desenvolvedor Fullstack"
}

console.log(
    `Nome: ${usuario2.nome}\n` +
    `Curso: ${usuario2.curso}\n` +
    `Empresa: ${usuario2.empresa}\n` +
    `Cargo: ${usuario2.cargo}\n`
)