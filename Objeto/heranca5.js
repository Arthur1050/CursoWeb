console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object) // Todos eles são funções. Logo todos eles possuem um .prototype

// Adicionando um novo metodo à função string
String.prototype.reverse = function() {
    return this.split('') // corta a string em pedaços retornando um objeto
                .reverse() // Inverte a ordem do array
                .join('') // Junta todo o array novamente em uma unica string
}
console.log('Escola Cod3r'.reverse())


// Adicionando um metodo ao array q retorna o primeiro elemento dele
Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first()) // Retorna 1
console.log(['a', 'b', 'c'].first()) // Retorna a