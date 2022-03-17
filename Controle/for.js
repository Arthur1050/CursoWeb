                               //Dando o exemplo em 'While'.


let contador = 1                          //Declaração da variavél
while (contador <= 10) {                  //Expressão do laço
    console.log(`Contador = ${contador}`)
    contador++                            //Incremento
}

                                     //Agora em for


// O laço "for" comprime todo o processo do laço "while" (declaração, expressão e incremento) em uma única linha

//    Declaração | Expressão | Incremento  
for ( let i = 1;    i <= 10;      i++ ) {
    console.log(`i = ${i}`)
}

                                   //"For" no array

const notas = [6.54, 3.46, 8.90, 2.20, 4.33]
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota: ${notas[i]}`)
}