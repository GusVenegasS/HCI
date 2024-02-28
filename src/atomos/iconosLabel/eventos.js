import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../atomos.css'
import { Cuerpo } from "../../estyles";


const Icon = ({ texto, icon }) => {
    return (
        <>
            <div className="iconos iconEventos">
                <div>
                    <FontAwesomeIcon icon={icon} style={{ fontSize: '30px', color: '#fff' }} />
                </div>
                <Cuerpo>{texto}</Cuerpo>
            </div>
        </>
    )
}

export default Icon

