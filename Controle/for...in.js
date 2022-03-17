// O "For..in" atribui ao i o numero do índice do valor no array

const notas = [3.3, 2.2, 1.1, 4.4, 5.5, 6.6]

//   Variavél que irá receber o valor do índice e o array que contem os índices
for (let i in notas) {
    console.log(`Índice ${i}, nota: ${notas[i]}`)
}

// O mesmo se aplica aos objetos

const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Tosta',
    peso: 67,
    idade: 18
}
// Da mesma maneira que os atributos(índices) do array foi atribuido ao "i", os índices(atributos) do objeto também foi
for (let atributo in pessoa) {
    console.log(`Atributo: ${atributo}. Objeto: ${pessoa[atributo]}`)

    //imprimirá "Arthur"
    if (atributo == 'nome') {
        console.log(pessoa[atributo])
    }
}