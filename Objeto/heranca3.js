const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // Outra forma de estabelece uma relação entre objetos passando "pai" como o prototipo de "filha1"
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { // Passa "pai" como prototipo no primeiro parametro e no segundo passa atributos com propriedades especificas
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' // Não poderá ser alterado
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

// Forma de percorrer todos os atributos de um objeto (até os herdados per herança)
for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Herdado por herança: ${key}`)
    // Se o objeto "filha2" tiver a chave (key) em questão, o console imprimira a mesma.
    // Caso contrário, o console imprimira "Herdado por herança" e a chave logo em seguida.
}