const anonimo = process.argv.indexOf('-a') !== -1 // Pega dentre os parametros passado nos argumentos o "-a"
//console.log(anonimo)

if (anonimo) {
    // "stdout" = standard output - Saída padrão
    process.stdout.write('Fala Anônimo!\n') // Metodo que escreve no console a partir de um processo (parecido com console.log)
} else {
    process.stdout.write('Informe o seu nome: ')
    // "stdin" = standard input - Entrada padrão (teclado)
    // Evento ativado quando vc digita algo e da "enter"
    process.stdin.on('data', data => {
        // Transformando o dado em string e removendo o "\n" adicionado por causa do "enter"
        const nome = data.toString().replace('\r\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}