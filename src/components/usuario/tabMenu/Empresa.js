import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import React from 'react';

export const Empresa = (props = {empleado:{}}) => {
  return (
    <div>
        <Divider align="left">
            <div className="inline-flex align-items-center">
                <b>Datos De Empresa</b>
            </div>
        </Divider>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Empresa:</span>
            <InputText type="text" className='inputForm' value={props.empleado.empresa.nombre_empresa}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>NIT:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.empresa.nit}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Lugar De Trabajo:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.lugar_trabajo.nombre_ciudad}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Centro De Costo:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.centro_costo.nombre_centro_costo}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Cargo:</span>
            <InputText type="text" className='inputForm' value={props.empleado.cargo.nombre_cargo}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Tipo De Contrato:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.tipo_contrato.nombre_tipo_contrato}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Tiempo:</span>
            <InputText type="text" className='inputForm' value={props.empleado.tiempo.nombre_tiempo}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Fecha Ingreso:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.fecha_ingreso}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Contrato Firmado:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.estado_contrato.nombre_estado_contrato}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Jefe De Zona:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.jefe_zona.nombres}></InputText> 
        </div>
    </div>
  )
};

