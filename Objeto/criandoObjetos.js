// FORMAS DE CRIAR UM OBJETO

// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
const obj2 = new Object
console.log(obj2)

// Funções construtoras - Uma função identica a uma classe construtora
function Produto(nome, preco, desc) {
    //  Declaração de atributos publicos
    this.nome = nome /* Apenas atributo "nome" poderá ser alterado depois que o objeto tiver sido instanciado. */

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc/100)
    }
}

const p1 = new Produto('Flocos de aveia', 11, 20)
const p2 = new Produto('Peito de frando', 10, 25)
console.log(`Temos ${p1.nome} com desconto saindo em ${p1.getPrecoComDesconto()}`)
console.log(`Também temos ${p2.nome} saindo a ${p2.getPrecoComDesconto()} com desconto!`)

// Função Factory - Uma função que cria um objeto
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas) 
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(`Salário do mês do ${f1.nome} será de ${f1.getSalario()}`)
console.log(`Salário do mês do ${f2.nome} será de ${f2.getSalario()}`)

// Object.creat
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// JSON.parse também retorna um objeto de certa forma
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)

/* OBS: JSON NÃO É O MESMO QUE OBJETO */