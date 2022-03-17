console.log('01)', '1' == 1) //'1' é igual a 1. True, pois estã sendo comparado somente os valores
console.log('02)', '1' === 1) //'1' é estritamente igual a 1. False, pois está levando em conta o tipo deles também (string, valor...)
console.log('03)', '3' != 3) //'3' é diferente(!=) de 3. False
console.log('04)', '3' !== 3)//'3' é estritamente diferente de 3. True

console.log('05)', 3 < 2) // False
console.log('06)', 3 > 2) // True
console.log('07)', 3 <= 2) // False
console.log('08)', 3 >= 2) // True

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // False
console.log('09)', d1 == d2) // False
console.log('09)', d1.getTime() === d2.getTime()) // True

console.log('12)', undefined == null) // True
console.log('13)', undefined === null) // False