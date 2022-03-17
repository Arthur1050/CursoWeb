const compras = (trabalho1, trabalho2) => {
    const comprarsorvete = trabalho1 || trabalho2 // "||" = "ou"
    const comprartv50 = trabalho1 && trabalho2 // "&&" = "e"
    //const comprartv30 = !!(trabalho1 ^ trabalho2) // "!!": Transforma os operandos em tipo boolean. "^" operador de "ou exclussivo"
    const comprartv30 = trabalho1 != trabalho2 // "!=" Diferente (simula o operador "ou exclussivo")
    const mantersaudavel = !comprarsorvete // "!": Negação lógica do valor (Se for "true" passa a ser "false")
    
    return {comprarsorvete, comprartv30, comprartv50, mantersaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))