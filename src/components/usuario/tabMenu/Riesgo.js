import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import React from 'react';

export const Riesgo = (props) => {
  return (
    <div>
        <Divider align="left">
            <div className="inline-flex align-items-center">
                <b>Datos Riesgo Basico</b>
            </div>
        </Divider>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>EPS:</span>
            <InputText type="text" className='inputForm' value={props.empleado.ep.nombre_eps}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>ARL:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.arl.nombre_arl}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Pensión:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.pension.nombre_pension}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Cesantias:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.cesantia.nombre_cesantias}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Caja Compensasión:</span>
            <InputText type="text" className='inputForm' value={props.empleado.caja_compensacion.nombre_caja_comp}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Direccion:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.direccion}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Fecha Expedición Documento:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.fecha_expedicion_doc}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Lugar Expedición Documento:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.lugar_exp_doc.nombre_ciudad}></InputText> 
        </div>
        <Divider align="left">
            <div className="inline-flex align-items-center">
                <b>Datos Contacto Emergencia</b>
            </div>
        </Divider>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Nombre:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.contacto_emergencia}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Telefono Contacto:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.tel_contacto_emergencia}></InputText> 
        </div>
    </div>
  )
};

