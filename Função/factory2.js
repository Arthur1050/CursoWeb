function prod(prodNome, prodValor) {
    return {
        nome: prodNome,
        valor: prodValor,
        desconto: prodValor * 0.90
    }
}

const produto1 = prod('Laranja', 2.99)
console.log(produto1)

const produto2 = prod('Banana Nanica', 3.99)
console.log(produto2)