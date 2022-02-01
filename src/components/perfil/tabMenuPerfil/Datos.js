import React from 'react';
import { Divider } from 'primereact/divider';

export const Datos = (props) => {
  return (
    <div>
        <Divider align="left">
            <div className="inline-flex align-items-center">
                <b>Datos Basicos</b>
            </div>
        </Divider>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Nombres:</span>
            {props.empleado.nombres}
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Apellidos:</span> 
            {props.empleado.apellidos}
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Documento:</span> 
            {props.empleado.tipo_identificacion.nombre_tipo_identificacion}
            {props.empleado.numero_identificacion}
        </div>
        <div className='text-left mb-2' >
            <span className='text-800 font-medium'>Genero:</span> 
            {props.empleado.genero?'Femenino':'Masculino'}
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Fecha De Nacimiento:</span>
            {props.empleado.fecha_nacimiento}
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Lugar De Nacimiento:</span> 
            {props.empleado.lugar_nacimiento.nombre_ciudad}
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Nacionalidad:</span>
            {props.empleado.nacionalidad.nombre_nacionalidad}
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Estado Civil:</span> 
            {props.empleado.estado_civil.nombre_estado_civil}
        </div>
        <Divider align="left">
            <div className="inline-flex align-items-center">
                <b>Datos Contacto</b>
            </div>
        </Divider>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Correo Electronico:</span> 
            {props.empleado.correo_electronico}
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Celular:</span> 
            {props.empleado.celular}
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Telefono Fijo:</span> 
            {props.empleado.telefono_fijo}
        </div>
    </div>
  )
};

