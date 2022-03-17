/* const livro = {
    nome: "React Native",
    editora: "Casa do Código",
    paginas: 185,
    anunciar: function() {
        console.log('A alura indica o livro ' + this.nome + "!!")
    }
}

livro.anunciar() */

/* "Classe" é o nome que se dá para as estruturas que se usa para criar objetos. */


/* Quando não existia classe na linguagem, era usado funções para trocar os valores dos atributos. */

/* const Livro = function(nome, editora, paginas) {
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function() {
        return gNome
    }
    this.getEditora = function() {
        return gEditora
    }
    this.getPaginas = function() {
        return gPaginas
    }
}

const GraphQL = new Livro('GraphQL', 'Casa do Código', 143)
console.log(GraphQL.getNome())
console.log(GraphQL.getEditora())
console.log(GraphQL.getPaginas()) */


/* Agora passando o exemplo anterior usando a função para uma estrutura de classe */

class Livro {
    /* No "constructor" podemos passar os parametros à classe */
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }

    /* Após passar os parametros, podemos criar metódos para interagir com a classe, dando comportamentos.
       Detalhe, não é necessario escrever "function na frente para declarar-los dessa forma." */

    anunciarTitulo() {
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} paginas.`)
    }
}

/* Usando o "new", se cria uma noca instancia da classe, o atribuindo à constante nodeJS. */
const nodeJS = new Livro('Primeiros passos com NodeJS', 'Casa do Codigo', 195)
nodeJS.anunciarTitulo()
nodeJS.descreverTitulo()

console.log(typeof Livro) /* "function". Clases no js na verdade são funções. */
/* Diferença: Clases não são hoisted (chamar uma função mesmo que ela esteja no fim do algoritimo.) */


/* Criar uma classe que erde os parametros de outra classe antes declarada. */
class livroColecao extends Livro { /* "extends" cria uma extensão entre duas clases. */
    constructor(nome, nomeColecao) {
        super(nome) /* "super" relaciona a classe que foi envolvida na extensão. */
        this.nomeColecao = nomeColecao
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}.`)
    }
}

const logicaDeProgramacao = new livroColecao("Logica de Programação", 'Comece a Programar')
logicaDeProgramacao.descreverColecao()