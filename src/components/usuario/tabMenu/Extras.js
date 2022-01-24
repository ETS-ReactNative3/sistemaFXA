import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import React from 'react';

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
            <InputText type="text" className='inputForm' value={props.empleado.salario.monto_salario}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Aux. Movilidad:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.aux_movilidad.monto_aux_movilidad}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Banco:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.banco.nombre_banco}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Tipo Cuenta:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.tipo_cuentum.nombre_tipo_cuenta}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Nuemro De Cuenta:</span>
            <InputText type="text" className='inputForm' value={props.empleado.num_cuenta}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Riesgo:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.riesgo}></InputText> 
        </div>
        <Divider align="left">
            <div className="inline-flex align-items-center">
                <b>Otros Datos</b>
            </div>
        </Divider>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Estudios Realizados:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.estudios_realizado.nombre_estudios}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Talla Camisa:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.talla_camisa.nombre_talla_camisa}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Talla Pantalon:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.talla_pantalon.nombre_talla_pantalon}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Talla Calzado:</span> 
            <InputText type="text" className='inputForm' value={props.empleado.talla_calzado.nombre_talla_calzado}></InputText> 
        </div>
    </div>
  )
};

