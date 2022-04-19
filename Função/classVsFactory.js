class Pessoa {
    /* Construck: Mesmo conceito usado em uma função construtora */
    constructor(nome) {
        // "This.nome" é o mesmo que dizer "Pessoa.nome" 
        // Nesse caso a "Pessoa.nome" recebe o parametro "nome" passado no momento em que um objeto é instanciado
        this.nome = nome // Declaração de variavél publica
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('jorge')
p1.falar()

// Fazendo a mesma lógica de cima só que com o Factory
const pessoa = function(nome) {
    return {
        falar: function() {console.log(`Meu nome é ${nome}`)}
    }
}

const p2 = pessoa('Daniel Mole')
p2.falar()