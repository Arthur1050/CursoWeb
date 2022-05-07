// Agora q já vi a estruturação de um componente funcional (usando exportações de funções)
// irei ver a estrutura de um componente de classe

import React, {Component} from "react";

export default class Saudacao extends Component {
    
    /* Não é possível alterar as propriedades passadas como paramentros depois de já ter instanciado essa classe */
    /* Só é possível alterar o "state" */
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    // Construtor que receber como parametro as propriedades do componente
    constructor(props) {
        // É obrigatorio passar as props (propriedades) para a super classe (component) assosiada ao "super"
        super(props)
        
        this.setTipo = this.setTipo.bind(this) // Relacionando a instancia "this" (Saudacao) à função "setTipo" com bind
    }

    setTipo(e) {
        // Existe uma função responsável por alterar o "state" declarado a principio
        this.setState({ tipo: e.target.value })
    }

    setName(e) {
        this.setState({nome: e.target.value})
    }

    render() {
        // Pegando as propriedades passadas para um componente de classe
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                {/* "onChange" é um evento disparado toda vez que o valor do input é alterado */}
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} /> 
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setName(e)} />
            </div>
        )
    }
}