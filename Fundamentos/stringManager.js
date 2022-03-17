var string = '/ Teste de string'
console.log(string)

var string = string.slice(1) //Slice = fatiar; Apaga as primeiras letras da string na quantidade declarada no parametro
console.log(string) // Teste de string

var string = string.trim() //Trim = Aparar; Apaga os espaços em branco que tiver no começo e no final da string
console.log(string)  //Teste de string

var string = string.split(/ /) //Split = dividir; Divide as palavras q estiver na string entre índices de uma array
console.log(string)  //[ 'Teste', 'de', 'string' ]
console.log(string[0]) //Teste
console.log(string[1]) //de
console.log(string[2]) //string

var string = string.shift() //Retorna somente o primeiro índice do array
console.log(string) //Teste

var string = string.toLowerCase() // ToLowerCase = Para minuscula; Muda as letras maiusculas da string para minusculas
console.log(string) //teste