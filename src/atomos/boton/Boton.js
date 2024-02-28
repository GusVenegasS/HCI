import React from "react";
import '../atomos.css'

const Boton = ({valor}) => {
    return(
        <div className="contenedorBoton">
            <button className="boton">
                {valor}
            </button>
        </div>
    )
}


export default Boton