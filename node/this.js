console.log(this === global) // False
console.log(this === module) // false

console.log(this === module.exports) // true - "this" referencia o module.exports
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis() // Dentro de uma função, o this deixa de referenciar o exports e passa a referenciar o objeto global