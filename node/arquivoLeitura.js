const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono... - Vai travar o looping e so voltar quando o arquivo tiver sido lido por completo
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, current) => {
    const config = JSON.parse(conteudo) // Passa o arquivo json de string para objeto
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') // Lê o arquivo já passando ele de string(JSON) para objeto
console.log(config)

// Lendo uma pasta
fs.readdir(__dirname, 'utf-8', (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})