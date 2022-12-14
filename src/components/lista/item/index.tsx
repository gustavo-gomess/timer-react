import { ITarefas } from '../../../types/tarefa'
import Style  from '../style.module.scss'

interface Props extends ITarefas { 
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
  }

  export default function Item(
    {
      tarefa,
      tempo,
      selecionado,
      completado,
      id,
      selecionaTarefa
    }: Props) {
    return (
      <li
        className={`${Style.item} ${selecionado ? Style.itemSelecionado : ''} ${completado ? Style.itemCompletado : ''}`}
        onClick={() => !completado && selecionaTarefa(
          {
            tarefa,
            tempo,
            selecionado,
            completado,
            id
          }
          )}
        >
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
        {completado && <span className={Style.concluido} aria-label="tarefa completada"></span>}
      </li>
    )
  }