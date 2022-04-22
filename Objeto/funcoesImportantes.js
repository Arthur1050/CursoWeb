const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

    // Object.keys()
console.log(Object.keys(pessoa)) // Retorna todas as chaves(atributos) do objeto "pessoa"


    // Object.values()
console.log(Object.values(pessoa)) // Retorna todos os valores das chaves do objeto


    // Object.entries()
console.log(Object.entries(pessoa)) // Retorna um array de arrays que compoem a chave no índice 1 e o valor no índice 2

Object.entries(pessoa).forEach(e => { // É possível estar utilizando o foreach nesse metodo
    console.log(`Chave: ${e[0]}, Valor: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => { // O mesmo que o de cima só que usando o destructuring no parametro
    console.log(`Chave: ${chave}, Valor: ${valor}`)
})


    // Object.defineProperty() - Define uma propriedade de um objeto e atribua atributos à ele
Object.defineProperty(pessoa, 'dataNascimento', { // Adicionando atributos a propriedade
    enumerable: true, // Se a propriedade vai ou não ser listada em uma chamada do tipo "object.keys()" por exemplo
    writable: false, // Se a propriedade pode ser ou não modificada
    value: '01/01/2019' // Atribui o valor que a chave/propriedade vai receber
})

pessoa.dataNascimento = '01/01/2017' // O valor não será atribuido, já que o writable foi definido como false no metodo a cima
console.log(pessoa.dataNascimento)
console.log(pessoa) // Aparecera a chave e valor "dataNascimento" pois seu enumerable foi definido como true
console.log(Object.keys(pessoa)) // Aparecera a chave "dataNascimento" pois seu enumerable foi definido como true


    // Object.assing() (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // Concatena os objetos jogando todos os atributos no primeiro objeto passado como parametro e resultando em um unico objeto

Object.freeze(obj) // Congela o Objeto
obj.c = 1234 // Não será alterado
console.log(obj)