import React from 'react';
import { Fragment, useState} from 'react';
import './Formulario.css'


const Formulario = ({nuevaLocalizacion}) => {

    const [ciudad, setCiudad] = useState ("");

    const cambioEvento = (e) => {
        e.preventDefault();
        if (ciudad === "" || !ciudad) return;

        nuevaLocalizacion(ciudad);
    }

    return(
        <Fragment>
          <div className='formulario container'>

          <form onSubmit={cambioEvento}>
            <div className='input-group'>
            <input 
                className='form-control'
                type="text" 
                name="buscar"
                onChange={(e) => {setCiudad(e.target.value)}}
                placeholder="Nombre de ciudad"
            /> 
            <button
                className='btn input-group-text'
                type='submit'
                onSubmit={cambioEvento}
            > Enviar
            </button>
            </div>

          </ form>
          </div>
        </Fragment>

    )
}

export { Formulario }