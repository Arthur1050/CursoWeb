// Outras formas de exportar (mais comuns)
// Atribuindo um novo objeto ao "exports" ao invés de fzr isso dinamicamento com a notação ponto (".bomDia")
module.exports = { // Unica forma de exportar fazendo uma subtituição de objeto é dessa forma
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}