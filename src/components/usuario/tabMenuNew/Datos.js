import classNames from 'classnames';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { DefaultSelect } from '../items/DefaultSelect';
import { ToogleButton } from '../items/ToogleButton';



const Datos = (props) => {
    let today = new Date()

    const isFormFieldValid = (name) => !!(props.formik.touched[name] && props.formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{props.formik.errors[name]}</small>;
    };
    
    const monthNavigatorTemplate=(e)=> {
        return <Dropdown value={e.value} options={e.options} onChange={(event) => e.onChange(event.originalEvent, event.value)} style={{ lineHeight: 1 }} />;
    }

    const yearNavigatorTemplate=(e)=> {
        return <Dropdown value={e.value} options={e.options} onChange={(event) => e.onChange(event.originalEvent, event.value)} className="p-ml-2" style={{ lineHeight: 1 }} />;
    }

  return (
    <div className='grid w-full'>
        <div className="col-12 md:col-4 mt-4">
            <span className="p-float-label">
                <InputText name='nombres' type="text" className={classNames({ 'error-input': isFormFieldValid('nombres') })+' w-full'} value={props.formik.values.nombres} onChange={props.formik.handleChange}></InputText> 
                <label>Nombres:</label>
                <div>{getFormErrorMessage('nombres')}</div>
            </span>
        </div>
        <div className="col-12 md:col-4 mt-4">
            <span className="p-float-label">
                <InputText name='apellidos' type="text" className={classNames({ 'error-input': isFormFieldValid('apellidos') })+' w-full'} value={props.formik.values.apellidos} onChange={props.formik.handleChange}></InputText> 
                <label>Apellidos:</label>
                <div>{getFormErrorMessage('apellidos')}</div>
            </span>
        </div>
        <div className="col-12 md:col-4 mt-4">
            <span className="p-float-label">
                <DefaultSelect className={classNames({ 'error-input': isFormFieldValid('id_tipo_identificacion_fk') })+' w-full'} name='id_tipo_identificacion_fk' id_def="id_tipo_identificacion" nombre_def="nombre_tipo_identificacion" serviceName="TipoIdentificacionService" id={props.formik.values.id_tipo_identificacion_fk} onChange={props.formik.handleChange}/>
                <label>Tipo Identificacion:</label>
                <div>{getFormErrorMessage('id_tipo_identificacion_fk')}</div>
            </span>
        </div>
        <div className="col-12 md:col-4 mt-4">
            <span className="p-float-label">
                <InputText name='numero_identificacion' type="text" className={classNames({ 'error-input': isFormFieldValid('numero_identificacion') })+' w-full'} value={props.formik.values.numero_identificacion} onChange={props.formik.handleChange}></InputText> 
                <label>Número Documento:</label>
                <div>{getFormErrorMessage('numero_identificacion')}</div>
            </span>
        </div>
        <div className="col-12 md:col-4 mt-4">
                <span className='text-800 font-medium'>Genero:</span> 
                <ToogleButton name='genero' id={props.formik.values.genero} onChange={props.formik.handleChange}/>
        </div> 
        <div className="col-12 md:col-4 mt-4">
            <span className="p-float-label">
                <Calendar name="fecha_nacimiento" yearRange={`${today.getFullYear()-90}:${today.getFullYear()-14}`} id="fecha_nacimiento" value={props.formik.values.fecha_nacimiento} onChange={props.formik.handleChange}  monthNavigator yearNavigator className={classNames({ 'p-invalid': isFormFieldValid('fecha_nacimiento') }+' inputForm')}
                    readOnlyInput monthNavigatorTemplate={monthNavigatorTemplate} yearNavigatorTemplate={yearNavigatorTemplate}/> 
                <div>{getFormErrorMessage('fecha_nacimiento')}</div>
                <label>Fecha Nacimiento:</label>
            </span>
        </div>

    </div>
  )
};

export default Datos;
