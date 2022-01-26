import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { DefaultSelect } from '../items/DefaultSelect';

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
            <DefaultSelect name='eps_fk' id_def="id_eps" nombre_def="nombre_eps" serviceName="EpsService" id={props.empleado.values.eps_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>ARL:</span> 
            <DefaultSelect name='arl_fk' id_def="id_arl" nombre_def="nombre_arl" serviceName="ArlService" id={props.empleado.values.arl_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Pensión:</span> 
            <DefaultSelect name='pension_fk' id_def="id_pension" nombre_def="nombre_pension" serviceName="PensionService" id={props.empleado.values.pension_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Cesantias:</span> 
            <DefaultSelect name='cesantias_fk' id_def="id_cesantias" nombre_def="nombre_cesantias" serviceName="CesantiasService" id={props.empleado.values.cesantias_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Caja Compensasión:</span>
            <DefaultSelect name='ccf_fk' id_def="id_caja_comp" nombre_def="nombre_caja_comp" serviceName="CajaCompService" id={props.empleado.values.ccf_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Direccion:</span> 
            <InputText name='direccion' type="text" className='inputForm' value={props.empleado.values.direccion} onChange={props.empleado.handleChange}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Fecha Expedición Documento:</span> 
            <InputText name='fecha_expedicion_doc' type="text" className='inputForm' value={props.empleado.values.fecha_expedicion_doc} onChange={props.empleado.handleChange}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Lugar Expedición Documento:</span> 
            <DefaultSelect name='lugar_exp_doc_fk' id_def="id_ciudad" nombre_def="nombre_ciudad" serviceName="CiudadService" id={props.empleado.values.lugar_exp_doc_fk} onChange={props.empleado.handleChange}/>
        </div>
        <Divider align="left">
            <div className="inline-flex align-items-center">
                <b>Datos Contacto Emergencia</b>
            </div>
        </Divider>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Nombre:</span> 
            <InputText name='contacto_emergencia' type="text" className='inputForm' value={props.empleado.values.contacto_emergencia} onChange={props.empleado.handleChange}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Telefono Contacto:</span> 
            <InputText name='tel_contacto_emergencia' type="text" className='inputForm' value={props.empleado.values.tel_contacto_emergencia} onChange={props.empleado.handleChange}></InputText> 
        </div>
    </div>
  )
};

