import React, { useState } from 'react';
import { ITarefas } from '../../types/tarefa';
import Item from './item';
import Style  from './style.module.scss'


function Lista({tarefas}: {tarefas: ITarefas[]}) {
  return (
    <aside className={Style.listaTarefas}>   
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
          key={index}
            tarefa={item.tarefa}
            tempo={item.tempo} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;