console.log(module.exports === this) // true
console.log(module.exports === exports) // true

this.a = 1// { a: 1 }
exports.b = 2 // { a: 1, b: 2 }
module.exports.c = 3 // { a: 1, b: 2, c: 3 }

exports = null
console.log(module.exports) // Não será "null" pq "exports" é apenas uma variavel que referencia o "module.exports"

// Forma errada
exports = { // Esse objeto nn será retornado pois ele apenas referencia o module.export
    nome: 'Tests'
}
// Forma correta
module.exports = {
    nome: 'Tests'
}