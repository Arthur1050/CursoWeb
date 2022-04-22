const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// Todo objeto tem a propriedade "__proto__" que aponta para "Object.prototype"
console.log(ferrari.__proto__) // Atributo "__proto__" aponta para o prototipo pai, que está no topo da cadeia de heranças
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

/*
 Obs: Apenas obetos possuem a propriedade "__proto__" e apenas funções possuem a propriedade "prototype"
como "Object" é uma função, ele vai possuir a propriedade prototype, que é inclusive para onde os atributos
__proto__ presente nos objetos apontam.
*/