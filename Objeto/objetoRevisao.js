const produto = new Object

/* Adicionando atributos ao objeto "produto" */
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genericas'
produto.preco = 220

console.log(produto)

/* Deletando atributos de um objeto com "delet" */
delete produto.preco
delete produto['marca do produto']

console.log(produto)

/* Adicionando um objeto dentro de outro objeto */
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        },
    },
    /* Adicionando tbm um array de objetos */
    condutores : [{
        nome: 'Junior',
        idade: 19
    }, {
        nomde: 'Ana',
        idade: 42
    }],
    /* Adicionando função ao objeto */
    calcularValorSeguro: function() {
        //...
    }
}
/* Acessando e alterando os valores das propriedades do objeto carro */
carro.proprietario.endereco.numero = 1000
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro