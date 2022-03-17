// par nome/valor
const saudacao = 'opa'  // Contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Maiquin',
    idade: 16,
    peso: 45,
    endereco: {
        logradouro: 'Rua buscapé',
        numero: 666,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)