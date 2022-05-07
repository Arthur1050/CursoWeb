// Importando Modulos
const moduloA = require('./moduloA') // Associando os objetos exportados em "moduloA.js" na constante "moduloA"
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)
