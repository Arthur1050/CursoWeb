//Armazenando uma função em uma variavel/constante
const imprimrisoma = function (a, b) {
    console.log(a + b)
}

imprimrisoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retonro implicito
const subtracao = (a, b) => a - b

console.log(subtracao(5, 3))

// Função com um único parametro
const palavra = a => console.log(a)

palavra('Meu pau de trampolim!!')