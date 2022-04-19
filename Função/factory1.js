// Função Factory: Uma função que retorna um objeto

// Factory simples
function criarPessoa1() {
    return {
        nome: 'Ana',
        sobrenome:'Silva'
    }
}

const pessoa1 = criarPessoa1()
console.log(pessoa1.nome)

/* Reproduzindo a mesma lógica da Factory Simples porém com um constructor */
function criarPessoa2() {
    this.nome = 'Ana'
    this.sobrenome = 'Sila'
}

const pessoa2 = new criarPessoa2
console.log(pessoa2.nome)