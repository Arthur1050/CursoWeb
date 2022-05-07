console.log(this) // {} Objeto vazio
console.log(exports) // {} Objeto vazio
console.log(module.exports) // {} Objeto vazio

// Formas de exportar algo de dentro de um modulo Node
this.ola = 'Fala pessoal' // Perceba q todos eles são objetos que armazena chaves e valores
exports.bemVindo = 'Bem vindo ao node!' // Armazenando como chave no exports "bemVindo" com o valor "Bem vindo ao node!"
module.exports.ateLogo = 'Até o próximo exemplo'
// As três formas acima fazem a mesma tarefa pois são a mesma coisa