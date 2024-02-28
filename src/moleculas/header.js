import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { H1 } from '../estyles'

const Header = ({ titulo }) => {
    return (
        <>
            <div className="header">
                <div className="columna">
                    <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '30px', color: '#fff' }} />
                </div>
                <H1>{titulo}</H1>
                <div className="columna">
                    <FontAwesomeIcon icon={faUser} style={{ fontSize: '30px', color: '#fff' }} />
                </div>
            </div>
        </>
    )
}

export default Header