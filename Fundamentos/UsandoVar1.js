{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera) //Var mesmo que esteja dentro de um bloco, é visivél de modo global

function mamacita() {
    var teste = 123
    console.log(teste)
}

mamacita()
console.log(teste) //(error (undefined)) Var dentro de uma função, só é visivél dentro daquela função