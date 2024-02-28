import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../atomos.css'
import { CuerpoVariante } from "../../estyles";


const Icon = ({ texto, icon }) => {
    return (
        <>
            <div className="iconos iconRegistrarPago">
                <div>
                    <FontAwesomeIcon icon={icon} style={{ fontSize: '30px', color: '#4F5E80' }} />
                </div>
                <CuerpoVariante>{texto}</CuerpoVariante>
            </div>
        </>
    )
}

export default Icon

