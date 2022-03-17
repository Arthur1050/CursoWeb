var numero = 1
{
    let numero = 2
    console.log('Dentro: ', numero) //Vai imprimir o valor declarado pelo let
}

console.log('Fora: ', numero) //Vai imprimir o valor declarado pelo var

// Ouu

let numero = 1
{
    let numero = 2
    console.log('Dentro: ', numero)
}

console.log('Fora: ', numero)