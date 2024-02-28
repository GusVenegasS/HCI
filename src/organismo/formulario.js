import React from "react";
import ElemntForm from "../moleculas/label";
import Boton from '../atomos/boton/Boton';
import "./organismo.css"
import { TituloForm } from "../estyles";

const Formulario = () => {
    return (
        <>
            <div className="contenedorFomrulario">
            <TituloForm>CASA #1</TituloForm>
                <ElemntForm text={"Nombre"} />
                <ElemntForm text={"Descripción"} />
                <ElemntForm text={"Monto"} />
                <ElemntForm text={"Mes"} />                
                <Boton valor={"Registrar"} />
            </div>
        </>
    )
}

export default Formulario