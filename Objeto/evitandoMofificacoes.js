// Object.preventExtensions() - O metodo previne que o objeto seja estendido, não podendo adicionar novos attr, apenas deletar e modificar
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log("Extensível: ", Object.isExtensible(produto)) // Metodo que retorna true/false caso o objeto for extensível ou não

produto.nome = 'Borracha' // Altera os valores
produto.descricao = 'Borracha escolar branca' // Novo atributo nn é permitido ser adicionado
delete produto.tag // Permitido deletar atributos
console.log(produto)

// Object.seal() - Metodo que não permire adicionar novos atributos NEM remover, mas permite modificar-los
const pessoa = {nome: 'Juliana', idade: 32}
Object.seal(pessoa) // "Sela" o objeto
console.log('Selado: ', Object.isSealed(pessoa)) // Testa se o objeto está selado ou não

pessoa.sobrenome = 'Silva' // Não será adicionado o novo attr
delete pessoa.nome // Não é permitido deletar atributos
pessoa.idade = 29 // É permitido alterar atributos já existentes
console.log(pessoa)

// Object.freeze = selado + valores constantes