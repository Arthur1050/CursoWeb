// Porta é um processo dentro do computador
// Uma maquina que recebe uma requisição possui varias aplicações rodando na internet (skype, steam, discord...)
// Cada aplicação recebe sua respectiva requisição a partir de uma porta que é unica por processo
// Buscar por uma porta (localhost:3003) é dizer qual processo vai atender a tal requisição ('get /produtos')
// Não basta ter só o endereço ip da maquina (dizendo quem vai atender), precisa dizer qual é a porta para 
// que o computador entenda qual é o processo que vai atender a tal requisição
const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// app.use é como um app.get, só q ele é ativado sempre que uma url é acessada, independente de qual url seja
app.use(bodyParser.urlencoded( {extended: true} )) // Sempre que uma url for acessada na porta 3003, o metodo urlencoded 
// irá fazer um parser na url e retornara uma função midleware

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Objeto será convertido para JSON automaticamente no ato da resposta
})

// Outro metodo get dessa vez com um parametro sendo passado diretamente na url
// Metodo para pegar um produto especifico
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // Pegando os parametro passado na URL através do req.params
})

// Metodo para submeter os dados e salvar um novo produto
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, // Pega o nome passado no corpo na requisição
        preco: req.body.preco
    })
    res.send(produto) // Produto convertido em JSON
})

// Altera um registro já existente
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Produto convertido em JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

// Porta na qual a aplicação ficara "escutando"
app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}.`)
})