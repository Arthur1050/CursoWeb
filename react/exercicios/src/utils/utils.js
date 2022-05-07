import React from "react"

export function childWithProps(props) {
    return React.Children.map(props.children, child => {
        /* Metodo do React que clona elementos e passa nova propriedades para ele */
        return React.cloneElement(child, {...props, ...child.props})        
    })
}
