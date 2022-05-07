// Objeto interno
const sequence = {
    _id: 1,
    get id() { return this._id++ } // Invacado toda vez que fizer um get nele (sequence.id)
}

const produtos = {}

function salvarProduto(produto) { // Função que receberá o produto como parametro
    // Se o objeto "produto" não possuir um id, ele recebe um novo com o "sequence.id" que retorna um novo id
    if (!produto.id) produto.id = sequence.id
    // O OBJETO "produto" é armazenado no ARRAY "produtos", localizado no índice de seu respectivo id
    produtos[produto.id] = produto
    return produto // Retorna o objeto passado nos parametro agora com id (caso já nn estivesse)
}

// Função para pegar o produto através de seu id
function getProduto(id){
    return produtos[id] || {} // Caso o objeto nn seja encontrado, ele retorna um objeto vazio
}

// Função para retornar todos os produtos no geral
function getProdutos() {
    // Objecto.values() faz com que seja retornado apenas os valores e não as chaves
    return Object.values(produtos)
}

// Função para excluir o registro de um produto
function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}