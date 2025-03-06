interface Repositorio<T> {
    salvar(dado: T): void
    obterTodos(): T[]
}

class Usuario implements Repositorio<{ nome: string, email: string }> {

    private baseDeDados: { nome: string, email: string }[] = [];

    constructor(baseDeDados?: { nome: string, email: string }[], nome?: string, email?: string) {
        this.baseDeDados = baseDeDados;
        this.salvar({ nome, email });

    }

    salvar(dado: { nome: string, email: string }): void {
        this.baseDeDados.push(dado);
    }

    obterTodos(): { nome: string, email: string }[] {
        return this.baseDeDados;
    }
}

const usuario1 = new Usuario([], "Ana", "anamaria@gmail.com")

usuario1.salvar({ nome: "Paulo", email: "pauloaugusto@gmail.com" })

console.log(usuario1.obterTodos());