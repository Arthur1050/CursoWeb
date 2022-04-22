// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' } // Prototipo = Object.prototype
const pai = {__proto__: avo, attr2: 'B'} // Prototipo = avo
const filho = {__proto__: pai, attr3: 'C'} // Prototipo = pai
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // O objeto filho não tem o atributo "attr1", mas o objeto avo tem. Seguindo a lógica da herança, logo ele irá imprimir o resultado no console

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing - Esse atributo velMax vai sobrepor o atributo velMax do seu prototype já que ele tem maior prioridade
}

const volvo = {
    modelo: 'V40',
    status() { // Sombreando (shadowng) a função status do prototipo
        return `Modelo ${this.modelo}: ${super.status()}` /* Da mesma forma que se usa "this" para referenciar o objeto atual, 
        é usado o "super" para referenciar o prototipo do objeto */
    }
}
// Uma forma diferente de estabelecer uma relação entre objetos
Object.setPrototypeOf(ferrari, carro) // Metodo de Object que define "carro" como prototipo de "ferrari" e passando seus atributos como herança
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())