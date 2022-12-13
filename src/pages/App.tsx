import React from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import Style  from './style.module.scss'

function App() {
  return (
    <div className={Style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  )
    
}

export default App;
