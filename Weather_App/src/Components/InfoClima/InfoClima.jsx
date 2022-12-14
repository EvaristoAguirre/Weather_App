import React , {Fragment, useState} from 'react';
import {Card} from '../Card/Card';
import {Formulario} from '../Formulario/Formulario'


const InfoClima = () => {

    const [infoClimaActual,setInfoClimaActual] = useState([]);
    const [infoClimaPrediccion,setInfoClimaPrediccion] = useState([]);
    const [localizacion,setLocalizacion] = useState("");
    const [cargando,setCargando]=useState(false);
    const [mostrar, setMostrar] = useState(false);



    let urlClimaActual = `https://api.openweathermap.org/data/2.5/weather?appid=a4640bd935bd3e8571e2b28f7fc051f3&lang=es&units=metric`
    let urlClimaPrediccion = `https://api.openweathermap.org/data/2.5/forecast?appid=a4640bd935bd3e8571e2b28f7fc051f3&lang=es&units=metric`
 
    let ciudadUrl = "&q=";
    
    
    const dataClima = async (localizacion) => {
        setCargando(true);
        setLocalizacion(localizacion);

        //Llamada API - Pronóstico Actual 

        urlClimaActual = urlClimaActual + ciudadUrl + localizacion;

        await fetch(urlClimaActual).then((response)=>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((infoData) => { 
            
            setInfoClimaActual(infoData);
            console.log(infoData);

        }).catch(error=>{
            console.log(error);
            setCargando(false);
            setMostrar(false);
        })
    
        //  Llamada API - Pronóstico próximas horas
         
         urlClimaPrediccion = urlClimaPrediccion + ciudadUrl + localizacion;

        await fetch(urlClimaPrediccion).then((response)=>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((infoData) => { 
            
            setInfoClimaPrediccion(infoData);
            console.log(infoData);

            setCargando(false);
            setMostrar(true);

        }).catch(error=>{
            console.log(error);
            setCargando(false);
            setMostrar(false);
        })
     
        
    }
    return (
        
    <Fragment>

        <Formulario 
        
            nuevaLocalizacion = {dataClima}

        />

        <Card 
        
            mostrarInfo = {mostrar}
            cargandoInfo = {cargando}
            clima = {infoClimaActual}
            climaPrediccion= {infoClimaPrediccion}
        
        />

    </Fragment>
        
    )
}

export { InfoClima }