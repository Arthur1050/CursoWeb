
// Classes = Funções contrustoras de objeto (Factory Functions)
class Lancamento {
    // No constructor é passado os "parametros da função" e é feito as propriedades da classe
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome // this.nome = Lancamento.nome
        this.valor = valor // this.valor = Lancamento.valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    // Adicinando metodos à nossa função construtora/classe
    addLancamentos(...lancamentos) { // Todos os objetos instanciados pela 1º classe feita, serão passados como parametros e contatenados em um array
        lancamentos.forEach(l => {this.lancamentos.push(l)}) // Adiciona os objetos instanciados ao atributo .lancamentos de outro objeto
    }

    // Metodo para somar ganhos e gastos
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor // Pega cada um dos objetos armazenados no array e soma seus valores
        })
        return valorConsolidado
    }

    // Lista os gastos
    description() {
        let discriminacao = ''
        this.lancamentos.forEach(l => {
            discriminacao += `${l.nome}: ${l.valor}\n`
        })
        return discriminacao
    }
}

// Instanciando objetos afim de fazer lancamentos
const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

// Instanciando outro objeto afim de declarar um novo ciclo financeiro
const julho = new CicloFinanceiro(6, 2018)
// Aicionando os lancamentos instanciados acima no ciclo financeiro criado
julho.addLancamentos(salario, contaDeLuz)
// Somando todos os gastos e ganhos de julho
console.log(julho.sumario())
// Listando os gastos
console.log(julho.description())