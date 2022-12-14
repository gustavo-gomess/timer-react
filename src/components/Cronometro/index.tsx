import Botao from "../button";
import Relogio from "./Relogio";
import Style  from './style.module.scss'

export default function Cronometro() {
    return(
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={Style.relogioWrapper}>
              <Relogio />
            </div>
            <Botao>
               Começar!     
            </Botao>      
        </div>

    )
}