import { ITarefas } from '../../../types/tarefa'
import Style  from '../style.module.scss'

export default function Item({ tarefa,tempo,completado,id,selecionado} : ITarefas) {
    return (    
        <li className={Style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}