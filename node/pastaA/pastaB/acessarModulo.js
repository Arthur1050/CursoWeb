const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

// Importando somente a pastaC sem referenciar o arquivo já que ele está sendo exportado a partir de um index.js da pasta
const c = require('./pastaC')
console.log(c.ola2)

// Importando modulos internos do Node
/* const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) */