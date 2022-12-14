import { useEffect, useState } from "react";
import { tempoParaSegundo } from "../../common/utils/time";
import { ITarefas } from "../../types/tarefa";
import Botao from "../button";
import Relogio from "./Relogio";
import Style  from './style.module.scss'

interface Props {
    selecionado: ITarefas | undefined,
    finalizarTarefa: () => void
  }
  
  export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();
  
    useEffect(() => {
      if(selecionado?.tempo) {
        setTempo(tempoParaSegundo(selecionado.tempo));
      }
    },[selecionado]);
  
    function regressiva(contador: number = 0) {
      setTimeout(() => {
        if(contador > 0) {
          setTempo(contador - 1);
          return regressiva(contador - 1);
        }
        finalizarTarefa();
      }, 1000)
    }
  
    return (
      <div className={Style.cronometro}>
        <p className={Style.titulo}>Escolha um card e inicie o Cronômetro</p>
        <div className={Style.relogioWrapper}>
          <Relogio tempo={tempo} />
        </div>
        <Botao onClick={() => regressiva(tempo)}>
          Começar!
        </Botao>
      </div>
    )
  }