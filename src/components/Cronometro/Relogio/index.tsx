import React from "react";
import Style  from './style.module.scss'

export default function Relogio() {
    return(
        // pode usar  <></> tbm ao inves de React.Fragmment  
        <React.Fragment>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioDivisao}>:</span>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioNumero}>0</span>
        </React.Fragment>
    )
}