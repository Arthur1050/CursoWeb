const sequencia = {
_valor: 1, // Colocar _ no começo dos atributos é sinonimod e uma variavel interna apenas
    get valor() {return this._valor++}, // get: Qquando vc apenas quer ler uma propriedade (sequencia.valor)
    set valor(valor) { // set: Quando você quer setar um novo valor a propriedade (sequencia.valor = 3)
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // Method get
sequencia.valor = 1000 // Method set
console.log(sequencia.valor, sequencia.valor) // Method get
sequencia.valor = 900 // Method set; Vai ser ignorado pois não atende à condição estabelecida no metodo
console.log(sequencia.valor, sequencia.valor) // Method get