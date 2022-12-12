import React from 'react';
import Botao from '../button';

class Formulario extends React.Component{
  render() {
    return(
        <form>
            <div>
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
            <div>
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
            <Botao />
        </form>
    )
  }   
};

export default Formulario;