import React, { useState } from 'react';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { DefaultSelect } from '../selectItems/DefaultSelect';

export const Datos = (props) => {

    const [datos, setDatos] = useState({
        nombres:props.empleado.nombres||'',
        apellidos: props.empleado.apellidos||'',
        id_tipo_identificacion_fk: props.empleado.id_tipo_identificacion_fk||0,
        numero_identificacion: props.empleado.numero_identificacion||'',
        genero: props.empleado.genero || false,
        fecha_nacimiento: props.empleado.fecha_nacimiento|| '',
        lugar_nacimiento_fk: props.empleado.lugar_nacimiento_fk||0,
        nacionalidad_fk: props.empleado.nacionalidad_fk||0,
        estado_civil_fk: props.empleado.estado_civil_fk||0,
        correo_electronico: props.empleado.correo_electronico||'',
        celular: props.empleado.celular||'',
        telefono_fijo: props.empleado.telefono_fijo||''
    });
    

  return (
    <div>
        <Divider align="left">
            <div className="inline-flex align-items-center">
                <b>Datos Basicos</b>
            </div>
        </Divider>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Nombres:</span>
            <InputText type="text" className='inputForm' value={datos.nombres}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Apellidos:</span> 
            <InputText type="text" className='inputForm' value={datos.apellidos}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Documento:</span> 
            <DefaultSelect id_def="id_tipo_identificacion" nombre_def="nombre_tipo_identificacion" serviceName="TipoIdentificacionService" id={datos.id_tipo_identificacion_fk}/>
            <InputText type="text" className='inputForm' value={datos.numero_identificacion}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Genero:</span> 
            <InputText type="text" className='inputForm' value={datos.genero}></InputText>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Fecha De Nacimiento:</span>
            <InputText type="text" className='inputForm' value={datos.fecha_nacimiento}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Lugar De Nacimiento:</span> 
            <DefaultSelect id_def="id_ciudad" nombre_def="nombre_ciudad" serviceName="CiudadService" id={datos.lugar_nacimiento_fk}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Nacionalidad:</span>
            <DefaultSelect id_def="id_nacionalidad" nombre_def="nombre_nacionalidad" serviceName="NacionalidadService" id={datos.nacionalidad_fk}/>
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Estado Civil:</span> 
            <DefaultSelect id_def="id_estado_civil" nombre_def="nombre_estado_civil" serviceName="EstadoCivilService" id={datos.estado_civil_fk}/>
        </div>
        <Divider align="left">
            <div className="inline-flex align-items-center">
                <b>Datos Contacto</b>
            </div>
        </Divider>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Correo Electronico:</span> 
            <InputText type="text" className='inputForm' value={datos.correo_electronico}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Celular:</span> 
            <InputText type="text" className='inputForm' value={datos.celular}></InputText> 
        </div>
        <div className='text-left mb-2'>
            <span className='text-800 font-medium'>Telefono Fijo:</span> 
            <InputText type="text" className='inputForm' value={datos.telefono_fijo}></InputText> 
        </div>
    </div>
  )
};

