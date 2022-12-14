import React from 'react';
import './Loading.css'
import cargando from '../../assets/Image/fondo-sin-datos.svg'

const Loading = () => {
    return(
        <div className="lds-ripple">
            
            <img src={cargando} alt="imagen cargando" className='imagen-cargando' />
            <p className='texto-cargando'>Cargando...</p>
            
        </div>
    )
}

export { Loading }