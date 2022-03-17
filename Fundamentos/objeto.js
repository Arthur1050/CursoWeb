const prod1 = {}
prod1.nome = 'Pão de Queijo'
prod1.preco = 2.99
prod1['atributo com espaço'] = 'evitar'

console.log(prod1)

const prod2 = {
    nome: 'PC',
    preço: 1500,
    perifericos: {
        motherboard: {
            processador: 'i5',
            mem: '8 gigas',
            chipset: 'intel',
        },
        hd: '500gbs',
        fonte: '500w real',
    },
}

console.log(prod2)

const oferta = (a) => {return a * 1/3}

console.log(oferta(prod2.preço))