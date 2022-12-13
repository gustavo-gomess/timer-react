import React from 'react';
import Botao from '../button';
import Style  from './style.module.scss'

class Formulario extends React.Component{
  render() {
    return(
        <form className={Style.novaTarefa}>
            <div className={Style.inputContainer}>
                <label htmlFor="tarefa">
                  Adicione um novo estudo 
                </label>
                <input 
                  type = "text"
                  name = "name "
                  id = "tarefa"
                  placeholder = "O que você quer estudar " 
                  required
                  />
                </div>
            <div className={Style.inputContainer}>
            <label>
              tempo 
            </label>
            <input 
                  type = "time"
                  step = "1"
                  name = "tempo"
                  id = 'tempo'
                  min = "00:00:00"
                  max = "01:30:00"
                  />
            </div>
            <Botao texto='Adcionar' />
        </form>
    )
  }   
};

export default Formulario;