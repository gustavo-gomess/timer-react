import { useEffect, useState } from "react";
import { tempoParaSegundo } from "../../common/utils/time";
import { ITarefas } from "../../types/tarefa";
import Botao from "../button";
import Relogio from "./Relogio";
import Style  from './style.module.scss'

interface Props {
    selecionado: ITarefas | undefined
}

export default function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();
    
    //rook para usar algum evento dentro da função
    useEffect(() =>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundo(selecionado.tempo));
        }
    },[selecionado])

    return(
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={Style.relogioWrapper}>
              <Relogio tempo={tempo}/>
            </div>
            <Botao>
               Começar!     
            </Botao>      
        </div>

    )
}