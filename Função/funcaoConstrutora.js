
// Criando uma função e passando parametros que recebem valores padrões caso nn sejam declarados
function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    // metodo publico
    // Associando metodos à "classe" (q na verdade é uma function) carro usando o "this"
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

// Instanciando objetos
const uno = new Carro

uno.acelerar()
console.log(uno.getVelocidadeAtual())

/* Instanciando um objeto e passando parametros deferentes do padrão */
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // function
console.log(typeof ferrari) // object: Objeto que foi instanciado a partir de uma função ("carro")