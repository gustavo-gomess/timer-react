import { ITarefas } from '../../../types/tarefa'
import Style  from './style.module.scss'

interface Props extends ITarefas { 
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
  }

export default function Item({ tarefa,tempo,completado,id,selecionado, selecionaTarefa} : Props) {
    return (    
        <li className={`${Style.item} ${selecionado ? Style.itemSelecionado : ''}`} 
        onClick={() =>selecionaTarefa({
            completado,
            id,
            selecionado,
            tarefa,
            tempo
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}