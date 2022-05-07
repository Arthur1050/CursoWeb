const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// fs.writeFile() - Metodo que escreve um arquivo especificado no 2º parametro no caminho especificado no 1º parametro
fs.writeFile(__dirname + '/arquivoGerado.JSON', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!') // Se "err" for null ent o arquivo será salvo. Caso contrário, ele imprimira o erro no console
})