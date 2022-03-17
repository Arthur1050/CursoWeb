const fs = require('fs-extra')

// Lê o arquivo JSON
var json = fs.readFileSync('./lib/msgcount.json')
// Converte o arquivo JSON em um objeto para que possa ser lido/interpretado pelo código
const jsonObj = JSON.parse(json)
//console.log(jsonObj)

//Manuseio do objeto
jsonObj.teste = 'mamãofalei'
//console.log(jsonObj)

// Transforma uma propriedade do objeto em outro objeto
jsonObj.Obj = {
    Nome:'Arthur',
    Idade:18,
    sexo:'Masculino',
    hobby:'Programação'
}
//console.log(jsonObj)

//Cria um array de objetos
jsonObj.arrayObjs = [{
    índice:1,
    position: 'Primeiro'
},
{
    ínidice:2,
    position:'segundo'
}]
// .Push() Adiciona um novo valor ao array.
// Adicionando um objeto dentro de outro objeto
jsonObj.arrayObjs.push([{
    índice: 3.1,
    position: 'Primeiro do terceiro'
}])

console.log(jsonObj.arrayObjs)
let primeiroDoTerceiro = jsonObj.arrayObjs[2]
console.log(primeiroDoTerceiro)

//Converte o objeto em um arquivo JSON
json = JSON.stringify(jsonObj)
//Reescreve o arquivo original com os novos dados
fs.writeFileSync('./lib/msgcount.json', json)