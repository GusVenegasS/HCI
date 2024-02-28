import React from "react";
import Icon from '../atomos/iconosLabel/eventos';
import IconP from '../atomos/iconosLabel/registrarPago';
import IconV from '../atomos/iconosLabel/verPagos';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import './moleculas.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="columna">
                    <Icon texto={"Eventos"} icon={faHome} />
                </div>
                <div className="columna">
                    <IconV texto={"Ver Pagos"} icon={faFileInvoiceDollar} />
                </div>
                <div className="columna">
                    <IconP texto={"Registrar Pago"} icon={faMoneyCheckDollar} />
                </div>
            </div>

        </>
    )
}

export default Footer