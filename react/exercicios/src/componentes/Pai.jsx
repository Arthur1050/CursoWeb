import React from "react";
import {childWithProps} from '../utils/utils'

export default props => <div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        {
            childWithProps(props)
        }
    </ul>
</div>