const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica') // Os dois compartilha do mesmo objeto importado

const contadorC = require('./instanciaNova')() // Importa e ao mesmo tempo invoca (por conta dos parenteses) a função factory 
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
// Já que o node faz cache no require, o contador A e B compartilham do mesmo objeto e resultado
console.log(contadorA.valor, contadorB.valor) // 3

contadorC.inc()
contadorC.inc()
// O contador C e D não compartilha o mesmo objeto pois foi importado uma função construtora instanciando objetos diferentes
console.log(contadorC.valor, contadorD.valor) // 1
