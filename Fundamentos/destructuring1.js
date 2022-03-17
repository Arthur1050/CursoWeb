// novo rescurso ES2015

const pessoa = {
    nome: 'João',
    idade: 15,
    endereco: {
        logradouro: 'Rua macaco',
        numero: 157
    }
}

const { nome, idade } = pessoa  //  Traz os dados do objeto "pessoa" para uma variavel (nome, idade)
console.log(nome, idade)

const { nome: n, idade: i } = pessoa  //  Traz os dados do objeto "pessoa" para uma variavel (n, i)
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa  //  "Undefined"
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep } } = pessoa  //  Traz os valores de endereço para uma variavel
console.log(logradouro, numero, cep)

//const { conta: {ag, cartao } } = pessoa  //  Error
//console.log(ag, cartao)