console.log(Math.ceil(6.4))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola'             Dá na mesma

console.log(obj1.nome)

function Obj(identidade) {
    this.nome = identidade
    this.exec = () => {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Prato')
const obj3 = new Obj('Linguiça')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()