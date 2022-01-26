import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { DefaultSelect } from '../items/DefaultSelect';

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
            <DefaultSelect name='id_empresa_fk' id_def="id_empresa" nombre_def="nombre_empresa" serviceName="EmpresaService" id={props.empleado.values.id_empresa_fk} onChange={props.empleado.handleChange}/>
        </div>
       <div className='text-left mb-2'>
            <span className='text-800 font-medium'>NIT:</span> 
            <InputText disabled type="text" className='inputForm' value={props.empleado.values.empresa.nit}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Lugar De Trabajo:</span> 
            <DefaultSelect name='lugar_trabajo_fk' id_def="id_ciudad" nombre_def="nombre_ciudad" serviceName="CiudadService" id={props.empleado.values.lugar_trabajo_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Centro De Costo:</span> 
            <DefaultSelect name='centro_costo_fk' id_def="id_centro_costo" nombre_def="nombre_centro_costo" serviceName="CentroCostoService" id={props.empleado.values.centro_costo_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Cargo:</span>
            <DefaultSelect name='cargo_fk' id_def="id_cargo" nombre_def="nombre_cargo" serviceName="CargoService" id={props.empleado.values.cargo_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Tipo De Contrato:</span> 
            <DefaultSelect name='tipo_contrato_fk' id_def="id_tipo_contrato" nombre_def="nombre_tipo_contrato" serviceName="TipoContratoService" id={props.empleado.values.tipo_contrato_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Tiempo:</span>
            <DefaultSelect name='tipoestado_contrato_fk' id_def="id_tiempo" nombre_def="nombre_tiempo" serviceName="TipoTiempoService" id={props.empleado.values.tipo_tiempo_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Fecha Ingreso:</span> 
            <InputText name='fecha_ingreso' type="text" className='inputForm' value={props.empleado.values.fecha_ingreso} onChange={props.empleado.handleChange}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Contrato Firmado:</span> 
            <DefaultSelect name='estado_contrato_fk' id_def="id_estado_contrato" nombre_def="nombre_estado_contrato" serviceName="EstadoContratoService" id={props.empleado.values.estado_contrato_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Jefe De Zona:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.values.jefe_zona_fk}></InputText> 
        </div> 
    </div>
  )
};

