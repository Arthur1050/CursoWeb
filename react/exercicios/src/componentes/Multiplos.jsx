import React from "react";

export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

export default {BoaTarde, BoaNoite}

//export default BoaTarde - Passando "Boa tarde" em export default, será possível importar ele com um nome que quiser e 
// tbm será possível importar as outras funções dos export de maneira destruturada

/* 
Obs: "export default" é usado quando quero exportar uma função anonima (sem nome) na intenção de ser retornado uma
função padrão (default) no momento em que esse modulo for importado.
    Ao utilizar apenas o "export", é necessario especificar um nome para a função já que é um metodo que consiste em
exportar diversas funções - que devem ser identificadas por nome - e não apenas uma por padrão.
*/