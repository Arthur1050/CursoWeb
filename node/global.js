// console.log(global)

// Criando um objeto global personalizado e congelando-o para nn permitir alterações
globalThis.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema legal'
})