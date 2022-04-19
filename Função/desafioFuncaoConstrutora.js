
    // Função construtora
function pessoa(nome) {
    //Declarando uma variavel publica
    this.nome = nome

    //A propriedade "falar" vai receber uma função. "this.falar" == "pessoa.falar"
    this.falar = function() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const person1 = new pessoa('Carlos')
person1.falar()