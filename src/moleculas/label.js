import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Titulo3 } from '../estyles'

const ElemntForm = ({ text }) => {
    return (
        <>
            <div className="elementForm">
                <Titulo3>{text}</Titulo3>
                <input className="input" type="text" />
            </div>
        </>
    )
}

export default ElemntForm