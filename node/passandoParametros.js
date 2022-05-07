 // A função recebe um array de nomes e retorna um array de saudações com nomes passados
module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}`)
}