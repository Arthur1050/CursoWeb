function MeuObjeto() {}
console.log(MeuObjeto.prototype) // {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // true - Tanto o obj1 quanto o obj2 aponta para o mesmo prototipo
console.log(MeuObjeto.prototype === obj1.__proto__) // true - o obj1 instanciado a partir de uma função, aponta para o .prototype daquela função E NÃO para o Object.prototype

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar() // Função herdada por herança

obj2.nome = 'Rafael' // shadowing
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Altera o prototiopo do obj3 de "Object.prototype" para "MeuObjeto.prototype"
obj3.nome = "Obj3"
obj3.falar()