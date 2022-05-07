const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Fazendo uma requisição url e obtendo o conteudo do arquivo com "then"
axios.get(url).then(response => {
    const funcionarios = response.data
    const femaleChine = funcionarios.filter(element => (element.pais === 'China' && element.genero === 'F'))
    const menorSalario = femaleChine.reduce((prev, current) => {
        return current.salario < prev.salario ? current : prev
    })
    console.log(menorSalario)
})