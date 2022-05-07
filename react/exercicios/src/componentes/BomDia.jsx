
import React from "react";

// Para receber os parametros passados diretamente pelo componente no index.js, tem q ser recebido um unico
// parametro (props), um objeto que abrigara todos os parametros em seus atributos. props = propriedades 
export default (props) =>
    // Não pode exportar 2 elementos de uma vez, apenas um, logo se torna necessario envolver todos eles em uma unica div
    // ou então envolver eles em uma tag React.Fragment (que não aparecerá no DOM da sua página)
    <React.Fragment>
        <h1>Bom dia {props.nome}! Está fazendo {props.idade} anos?</h1>
        <h2>Até breve!</h2>
    </React.Fragment>

//  Formas de fazer o que expliquei acima
//
//export default (props) =>
//  <React.Fragment>
//      <h1>Bom dia {props.nome}! Está fazendo {props.idade} anos?</h1>
//      <h2>Até breve!</h2>
//  </React.Fragment>
//
//export default (props) =>
//  <Fragment>
//      <h1>Bom dia {props.nome}! Está fazendo {props.idade} anos?</h1>
//      <h2>Até breve!</h2>
//  </Fragment>
//
//export default (props) =>
//  <div>
//      <h1>Bom dia {props.nome}! Está fazendo {props.idade} anos?</h1>
//      <h2>Até breve!</h2>
//  </div>