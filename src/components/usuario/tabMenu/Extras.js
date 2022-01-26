import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { DefaultSelect } from '../items/DefaultSelect';

export const Extras = (props) => {
  return (
    <div>
        <Divider align="left">
            <div className="inline-flex align-items-center">
                <b>Datos Nomina</b>
            </div>
        </Divider>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Salario:</span>
            <DefaultSelect name='salario_fk' id_def="id_salario" nombre_def="monto_salario" serviceName="SalarioService" id={props.empleado.values.salario_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Aux. Movilidad:</span> 
            <DefaultSelect name='aux_movilidad_fk' id_def="id_aux_movilidad" nombre_def="monto_aux_movilidad" serviceName="AuxMovilidadService" id={props.empleado.values.aux_movilidad_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Banco:</span> 
            <DefaultSelect name='banco_fk' id_def="id_banco" nombre_def="nombre_banco" serviceName="BancoService" id={props.empleado.values.banco_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Tipo Cuenta:</span> 
            <DefaultSelect name='tipo_cuenta_fk' id_def="id_tipo_cuenta" nombre_def="nombre_tipo_cuenta" serviceName="TipoCuentaService" id={props.empleado.values.tipo_cuenta_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Nuemro De Cuenta:</span>
            <InputText name='num_cuenta' type="text" className='inputForm' value={props.empleado.values.num_cuenta} onChange={props.empleado.handleChange}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Riesgo:</span> 
            <InputText name='riesgo' type="text" className='inputForm' value={props.empleado.values.riesgo} onChange={props.empleado.handleChange}></InputText> 
        </div>
        <Divider align="left">
            <div className="inline-flex align-items-center">
                <b>Otros Datos</b>
            </div>
        </Divider>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Estudios Realizados:</span> 
            <DefaultSelect name='estudios_fk' id_def="id_estudios" nombre_def="nombre_estudios" serviceName="EstudiosService" id={props.empleado.values.estudios_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Talla Camisa:</span> 
            <DefaultSelect name='talla_camisa_fk' id_def="id_talla_camisa" nombre_def="nombre_talla_camisa" serviceName="TallaCamisaService" id={props.empleado.values.talla_camisa_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Talla Pantalon:</span> 
            <DefaultSelect name='talla_pantalon_fk' id_def="id_talla_pantalon" nombre_def="nombre_talla_pantalon" serviceName="TallaPantalonService" id={props.empleado.values.talla_pantalon_fk} onChange={props.empleado.handleChange}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Talla Calzado:</span> 
            <DefaultSelect name='talla_calzado_fk' id_def="id_talla_calzado" nombre_def="nombre_talla_calzado" serviceName="TallaCalzadoService" id={props.empleado.values.talla_calzado_fk} onChange={props.empleado.handleChange}/>
        </div>
    </div>
  )
};

