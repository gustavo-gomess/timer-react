import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { ITarefas } from '../types/tarefa';
import Style  from './style.module.scss'

export default function App() {
  // por conveção sempre usar setAlguma coisa 
  const [tarefas, setTarefas]  = useState<ITarefas[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>();

  function selecionaTarefa(tarefaSelecionada: ITarefas){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map( tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={Style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas = {tarefas}
        selecionaTarefa = {selecionaTarefa}
      />
      <Cronometro selecionado = {selecionado} />
    </div>
  )
    
}
