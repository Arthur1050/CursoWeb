var string = '/Teste '
console.log(string)

var string = string.trim().slice(string.indexOf(' ') +1 ) //Trim = Apaga os espaços em branco do inicio e do fimd a string
console.log(string) //de string                              //Substring = Retorna as letras situadas entre os índices da string apresentadas no
                                                             //            1º e no 2º parametros do indexOf. Se não for apresentado um 2º parametro
                                                             //            ele retornará as letras entre o a posição do 1º parametro pra frente 
                                                             //indexOf = Aponta quantas letras tem na primeira palavra de string
//Usado para apagar a primeria palavra e deixar só o restante

var string = string.length
console.log(string)

var teste = 'testando um bagui'

console.log(teste.trim().slice(teste.indexOf(' ') +1))