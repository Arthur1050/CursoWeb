const strings = ['teste', 'de', 'strings']

console.log(strings)
console.log(strings.length)
const valor = strings.length

console.log(strings[0].replace('', 'mamaki')) //O 1º parametro é a string a ser substituida e, o 2º e a nova string q vai substituir

var valorFinal = ''
for (var i = 0; i < valor; i++) {valorFinal += `${strings[i]}\n`}
console.log(valorFinal)