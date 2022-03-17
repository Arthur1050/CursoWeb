const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) //Atribui o bodyparse à aplicação para que ele leia e monte um objeto a partir da requisição/URL da pagina

app.post('/usuarios', (req, resp) => {/* Após o URL codificado chegar e ser analisado pelo bodyParser para ser descodificado, */
    console.log(req.body)             /* ele é usado no parametro "req" (requisição) sendo possível analisar as propriedades enviadas pela url do front. */
    resp.send(`<h1>Parabéns! Usuario incluido com sucesso!!</h1>`) /* O "resp" é a resposta do b.end para o f.end. É aonde o b.end retorna o chamado da "req". */
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)  // Mostra o "id" obtido a partir dos parametro da URL recebida do f.end.
    console.log(req.body) //Mostra o corpo do objeto passado pela URL codificada do front mas logo descodificada no back pelo bodyParser
    resp.send(`<h1>Parabéns! Usuario alterado com sucesso!!</h1>`)
})
app.listen(3003)