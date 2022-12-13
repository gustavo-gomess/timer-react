import React from 'react';
import Item from './item';
import Style  from './style.module.scss'

function Lista() {
  const tarefas = [{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'Javascript',
    tempo: '01:00:00'
  }, {
    tarefa: "Typescript",
    tempo: "03:00:00"
  }];
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