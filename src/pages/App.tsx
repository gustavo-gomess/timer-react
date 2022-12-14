import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { ITarefas } from '../types/tarefa';
import Style  from './style.module.scss'

function App() {
  // por conveção sempre usar setAlguma coisa 
  const [tarefas, setTarefas]  = useState<ITarefas[]>([]);

  return (
    <div className={Style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas = {tarefas}/>
      <Cronometro />
    </div>
  )
    
}

export default App;
