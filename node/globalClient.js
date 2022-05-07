// Basta carregar o objeto "global" uma única vez que o teremos disponivel nos outros arquivos
require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)