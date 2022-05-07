// Padrão middleware (chain of responsibility) 

// 1º Parametro: Contexto/Dados que serão passados de uma função para outra
// 2º Parametro: Uma função que quando desparada chama o próximo passo
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3' // Esse não recebe a função "next"

// Função que recebe o contexto e um conjunto de middlewares (funções) dentro de um array
const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        // "se middlewares estiver setado && o indice for menor que o tamanho && [...middlewares] vai ser invocado passando o contexto e o next"
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx )