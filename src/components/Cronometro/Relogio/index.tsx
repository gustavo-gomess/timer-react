import React from "react";
import Style  from './style.module.scss'

interface Props{
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo / 60)

    const segundos = tempo % 60
    
    const [minutosDezenas, minutosUnidade] = String(minutos)
    .padStart(2,'0')

    const [segundoDezena, segundoUnidade] = String(segundos)
    .padStart(2,'0')
    
    return(
        // pode usar  <></> tbm ao inves de React.Fragmment  
        <React.Fragment>
            <span className={Style.relogioNumero}>{minutosDezenas}</span>
            <span className={Style.relogioNumero}>{minutosUnidade}</span>
            <span className={Style.relogioDivisao}>:</span>
            <span className={Style.relogioNumero}>{segundoDezena}</span>
            <span className={Style.relogioNumero}>{segundoUnidade}</span>
        </React.Fragment>
    )
}