import React, { useState } from 'react';
import { ITarefas } from '../../types/tarefa';
import Item from './item';
import Style  from './style.module.scss'

interface Props {
  tarefas: ITarefas[],
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

function Lista({tarefas, selecionaTarefa}: Props) {
  return (
    <aside className={Style.listaTarefas}>   
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item 
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;