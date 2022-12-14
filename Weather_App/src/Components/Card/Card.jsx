import React from 'react';
import { Loading } from '../Loanding/Loading';
import sinDatos from '../../assets/Image/cargando-spinner.svg';
import weatherCard from '../../assets/Image/weather-app.svg';
import spinner from '../../assets/Image/cargando-spinner.svg';
import './Card.css';
import icono from '../../assets/Image/geo-alt-fill.svg';




const Card = ({mostrarInfo, cargandoInfo, clima, climaPrediccion}) => {
    
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth()+1;
    var anio = fecha.getFullYear();
    var fechaActual = dia + '/' + mes + '/' + anio;
    
    var url = '';
    var iconoUrl = '';
    var iconoUrl_09 = '';
    var iconoUrl_12 = '';
    var iconoUrl_15 = '';
    var iconoUrl_18 = '';
    var iconoUrl_21 = '';
    var iconoUrl_24 = '';

    var prediccion_09 = '';
    var prediccion_12 = '';
    var prediccion_15 = '';
    var prediccion_18 = '';
    var prediccion_24 = '';
    var prediccion_21 = '';
    

    if (cargandoInfo){
        return <Loading />
    }

    if (mostrarInfo){
        url = 'http://openweathermap.org/img/w/'
        iconoUrl = url + clima.weather[0].icon + '.png';

    iconoUrl_09 = url + climaPrediccion.list[0].weather[0].icon + '.png';
    iconoUrl_12 = url + climaPrediccion.list[1].weather[0].icon + '.png';
    iconoUrl_15 = url + climaPrediccion.list[2].weather[0].icon + '.png';
    iconoUrl_18 = url + climaPrediccion.list[3].weather[0].icon + '.png';
    iconoUrl_21 = url + climaPrediccion.list[4].weather[0].icon + '.png';
    iconoUrl_24 = url + climaPrediccion.list[5].weather[0].icon + '.png';

    prediccion_09 = climaPrediccion.list[0].dt_txt.substring(11, 13) + 'hs';
    prediccion_12 = climaPrediccion.list[1].dt_txt.substring(11, 13) + 'hs';
    prediccion_15 = climaPrediccion.list[2].dt_txt.substring(11, 13) + 'hs';
    prediccion_18 = climaPrediccion.list[3].dt_txt.substring(11, 13) + 'hs';
    prediccion_21 = climaPrediccion.list[4].dt_txt.substring(11, 13) + 'hs';
    prediccion_24 = climaPrediccion.list[5].dt_txt.substring(11, 13) + 'hs';
        

    }

    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();

    if ((minutos>=0)&&(minutos<=9)){ minutos = '0'+minutos};

    var horaCompleta = hora+':'+minutos + ' hs';

    

    return(
        <div className='mt-5'>
        
        {

            mostrarInfo === true ? (
        <div>
                <div className='container tarjeta tarjeta-1'>
                        <div className='mb-3 mx-auto text-ligth'> 
                            
                            
                            <div className='row g-0'>

                                <div className='col-1-container container col-md-4'>
                                    <h3 className='card-titulo'><span><img src={icono} alt="icono-localicacion" className='icono-loc'/></span>{clima.name}</h3>
                                    <h2>{fechaActual}</h2>
                                    
                                    <h2>{(clima.main.temp).toFixed(1)}ºC</h2>
                                    <h2>{horaCompleta}</h2>
                                    <p className='card-descrip'>
                                        <img src={iconoUrl} alt="icono clima" />
                                        {clima.weather[0].description}
                                    </p>

                                </div>
                                <div className='col-2-container col-md-4'>
                                    <div className='card-body-imagen text start mt-2'>
                                        <img className='card-imagen' src={weatherCard} alt="" />
                                    </div>

                                </div>

                                <div className='col-3 col-md-4'>
                                    <div className='col-3-container col card-body-accesorio text start mt-2'>
                                        <div>
                                            <h3>Temp. máx.: {(clima.main.temp_max).toFixed(1)}ºC </h3>
                                            <h3>Temp. mín.: {(clima.main.temp_min).toFixed(1)}ºC </h3>
                                        </div>
                                            <br />
                                        <div>
                                            <h3>Sensación térmica: {(clima.main.feels_like).toFixed(1)}ºC </h3>
                                            <h3>Nubosidad: {clima.clouds.all} %</h3>
                                        </div>
                                             <br />
                                        <div>
                                            <h3>Vel. del viento: {(clima.wind.speed).toFixed(1)} m/s</h3>

                                        </div>
                                    </div>

                                </div>

                            </div>
                            

                            
                        </div>
                        
                        

                </div> 
                <div className='container tarjeta tarjeta-2'>
                    <div className='row g-0'> 
                                <div className='col-md-2 tarjeta-2-col'>
                                        <p className='prediccion'> {prediccion_09} </p>
                                        <p className='description'><img src={iconoUrl_09} alt="icon" /></p>
                                        <p>{climaPrediccion.list[0].weather[0].description}</p>
                                </div>
                                <div className='col-md-2 tarjeta-2-col'>
                                        <p className='prediccion'> {prediccion_12} </p>
                                        <p className='description'><img src={iconoUrl_12} alt="icon" /></p>
                                        <p>{climaPrediccion.list[1].weather[0].description}</p>
                                </div>
                                <div className='col-md-2 tarjeta-2-col'>
                                        <p className='prediccion'> {prediccion_15} </p>
                                        <p className='description'><img src={iconoUrl_15} alt="icon" /></p>
                                        <p>{climaPrediccion.list[2].weather[0].description}</p>
                                    
                                </div>
                                <div className='col-md-2 tarjeta-2-col'>
                                        <p className='prediccion'> {prediccion_18} </p>
                                        <p className='description'><img src={iconoUrl_18} alt="icon" /></p>
                                        <p>{climaPrediccion.list[3].weather[0].description}</p>
                                </div>
                                <div className='col-md-2 tarjeta-2-col'>
                                        <p className='prediccion'> {prediccion_21} </p>
                                        <p className='description'><img src={iconoUrl_21} alt="icon" /></p>
                                        <p>{climaPrediccion.list[4].weather[0].description}</p>
                                </div>
                                <div className='col-md-2 tarjeta-2-col'>
                                        <p className='prediccion'> {prediccion_24} </p>
                                        <p className='description'><img src={iconoUrl_24} alt="icon" /></p>
                                        <p className='ultimo'>{climaPrediccion.list[5].weather[0].description}</p>
                                </div>
                        </div>
                </div> 

        </div>


            ) : (
                <div>
                    <img className='sinDatos' src={sinDatos} alt="" />
                </div>
                )

        }

        </div>
        
    )
}

export { Card }