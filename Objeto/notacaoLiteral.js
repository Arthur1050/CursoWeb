const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c } // Faz o mesmo que o de cima
console.log(obj1, obj2) // Mesma coisa

// Adicionando um atributo ao objeto a partir de uma string
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // É possível usando o metodo de adicionar atributos a partir de colchetes
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} // Usando os colchetes dessa forma aqui também
console.log(obj4) // Mesma coisa do "obj3"

// Forma mais simples e prática de definir uma função dentro de um objeto
const obj5 = {
    funcao1: function() {
        // Forma menos prática
    },
    funcao2() {
        // Forma mais pratica e simples
    }
}
console.log(obj5)