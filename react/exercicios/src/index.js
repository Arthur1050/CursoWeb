import React from 'react'
import ReactDOM from 'react-dom'

// Obs: Todo componente SEU tem que começar com letra maíuscula pra ser renderizado
//import BomDia from './componentes/BomDia'

// Parametros do ReactDOM.render:
// Elemento JSX, O local/"container" aonde o elemento declarado no primeiro parametro será armazenado
//ReactDOM.render(<BomDia nome='Guilherme' idade={10}/>, document.getElementById('root'))

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="João" sobrenome="Cleber">
            <Filho nome="Pedro"/>
            <Filho nome="Paulo"/>
            <Filho nome="Carla"/>
        </Pai>
    </div>
, document.getElementById('root'))

