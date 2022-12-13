import React from "react";
import Style  from './style.module.scss'
class Botao extends React.Component<{ texto :string }> {
    render() {
        return (
            <button className={Style.botao}>
              {this.props.texto}
            </button>
        )
    }
} 

export default Botao;