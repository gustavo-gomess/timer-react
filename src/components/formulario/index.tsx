import React from 'react';
import { ITarefas } from '../../types/tarefa';
import Botao from '../button';
import Style  from './style.module.scss'
import { v4 as uuidv4} from 'uuid'
// não usar mais class usar function
class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>> 
}>  {
  //forma de fazer o state
  state = {
    tarefa : "",
    tempo : "00:00:00"
  }
  // para declarar alguma function dentro do Class Component só precisa ser declarada dessa maneira
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
    // preventDefault() serve para previnir que de refresh(F5) na pagina  
    evento.preventDefault()
    this.props.setTarefas(tarefasAntigas =>
      [
        ...tarefasAntigas,
         {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )
  }

  render() {
    return(
      // no onSubmit vai atualizar em outro lugar com o conteudo que foi inserido 
        <form className={Style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
            <div className={Style.inputContainer}>
                <label htmlFor="tarefa">
                  Adicione um novo estudo 
                </label>
                <input 
                  type = "text"
                  name = "name "
                  id = "tarefa"
                  //setar valor no campo
                  value={this.state.tarefa}
                  // setar valor no onChange
                  onChange = {evento => this.setState({...this.state, tarefa: evento.target.value})}
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
              value={this.state.tempo}
              onChange = {evento => this.setState({...this.state, tempo: evento.target.value})}
              min = "00:00:00"
              max = "01:30:00"
              />
            </div>
            <Botao>
              Adicionar
            </Botao>
        </form>
    )
  }   
};

export default Formulario;