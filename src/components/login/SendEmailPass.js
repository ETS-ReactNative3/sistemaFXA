import classNames from 'classnames';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { ScrollPanel } from 'primereact/scrollpanel';
import React, { useEffect, useState } from 'react';
import FormikLogin from './FormikLogin';
import { useHistory } from 'react-router-dom';

const SendEmailPass = (params) => {
    const history = useHistory();
    const [toastLog, setToastLog] = useState({});

    useEffect(()=>{
        localStorage.removeItem('token')
        if(toastLog.severity){
            params.toast.current.show(toastLog);
        }
    },[toastLog]) //eslint-disable-line

    const formikLogin = new FormikLogin()
    const formik = formikLogin.formikLog({setToastLog:setToastLog, history:history})
    
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };
  return (
        <form onSubmit={formik.handleSubmit} className="p-fluid card p-4 col-4">
            <ScrollPanel style={{width: '100%', height: '85vh'}}>
                <h5 className="text-center">¿Olvidaste La Contraseña?</h5>
                <div className="formgrid mt-5 mb-4 relative grid">
                    <div className="card">
                        Para restablecer tu contraseña se te pide que llenes el siguiente formulario con tus datos basicos y de manera opcional se te pide que dejes un mensaje
                    </div>
                    <div className="field col-6 p-inputgroup mt-4">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-id-card"></i>
                        </span>
                        <span className="p-float-label">
                            <InputText
                            tooltip="Ingrese su número de identificación"
                            tooltipOptions={{position: 'bottom'}}
                            name="numero_identificacion"
                            value={formik.values.numero_identificacion}
                            onChange={formik.handleChange}
                            className={classNames({ 'p-invalid': isFormFieldValid('numero_identificacion') })}
                            />
                            <label htmlFor="numero_identificacion" className={classNames({ 'p-error': isFormFieldValid('numero_identificacion') })}>Número Identificación:</label>
                        </span>
                        <p className="mx-6 absolute" style={{top:'2.6rem'}}>{getFormErrorMessage('numero_identificacion')}</p>
                    </div>
                    <div className="field col-6 p-inputgroup mt-4">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <span className="p-float-label">
                            <InputText
                            tooltip="Ingrese su nombre"
                            tooltipOptions={{position: 'bottom'}}
                            name="nombres"
                            value={formik.values.nombres}
                            onChange={formik.handleChange}
                            className={classNames({ 'p-invalid': isFormFieldValid('nombres') })}
                            />
                            <label htmlFor="nombres" className={classNames({ 'p-error': isFormFieldValid('nombres') })}>Nombre:</label>
                        </span>
                        <p className="mx-6 absolute" style={{top:'2.6rem'}}>{getFormErrorMessage('nombres')}</p>
                    </div>
                    <div className="field col-6 p-inputgroup mt-4">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-money-bill"></i>
                        </span>
                        <span className="p-float-label">
                            <InputText
                            tooltip="Ingrese el centro de costo donde labora"
                            tooltipOptions={{position: 'bottom'}}
                            name="centro_costo"
                            value={formik.values.centro_costo}
                            onChange={formik.handleChange}
                            className={classNames({ 'p-invalid': isFormFieldValid('centro_costo') })}
                            />
                            <label htmlFor="centro_costo" className={classNames({ 'p-error': isFormFieldValid('centro_costo') })}>Centro De Costo:</label>
                        </span>
                        <p className="mx-6 absolute" style={{top:'2.6rem'}}>{getFormErrorMessage('centro_costo')}</p>
                    </div>
                    <div className="field col-6 p-inputgroup mt-4">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-money-bill"></i>
                        </span>
                        <span className="p-float-label">
                            <InputText
                            tooltip="Ingrese su cargo"
                            tooltipOptions={{position: 'bottom'}}
                            name="cargo"
                            value={formik.values.cargo}
                            onChange={formik.handleChange}
                            className={classNames({ 'p-invalid': isFormFieldValid('cargo') })}
                            />
                            <label htmlFor="cargo" className={classNames({ 'p-error': isFormFieldValid('cargo') })}>Cargo:</label>
                        </span>
                        <p className="mx-6 absolute" style={{top:'2.6rem'}}>{getFormErrorMessage('cargo')}</p>
                    </div>
                    <div className="field col-6 p-inputgroup mt-4">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-phone"></i>
                        </span>
                        <span className="p-float-label">
                            <InputText
                            tooltip="Ingrese un número de contacto"
                            tooltipOptions={{position: 'bottom'}}
                            name="tel_contacto"
                            value={formik.values.tel_contacto}
                            onChange={formik.handleChange}
                            className={classNames({ 'p-invalid': isFormFieldValid('tel_contacto') })}
                            />
                            <label htmlFor="tel_contacto" className={classNames({ 'p-error': isFormFieldValid('tel_contacto') })}>Tel. Contacto:</label>
                        </span>
                        <p className="mx-6 absolute" style={{top:'2.6rem'}}>{getFormErrorMessage('tel_contacto')}</p>
                    </div>
                    <div className="field col-6 p-inputgroup mt-4">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-map-marker"></i>
                        </span>
                        <span className="p-float-label">
                            <InputText
                            tooltip="Ingrese la ciudad donde trabaja"
                            tooltipOptions={{position: 'bottom'}}
                            name="ciudad"
                            value={formik.values.ciudad}
                            onChange={formik.handleChange}
                            className={classNames({ 'p-invalid': isFormFieldValid('ciudad') })}
                            />
                            <label htmlFor="ciudad" className={classNames({ 'p-error': isFormFieldValid('ciudad') })}>Ciudad:</label>
                        </span>
                        <p className="mx-6 absolute" style={{top:'2.6rem'}}>{getFormErrorMessage('ciudad')}</p>
                    </div>
                    <div className="field col-12 p-inputgroup mt-4">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-envelope"></i>
                        </span>
                        <span className="p-float-label">
                            <InputTextarea
                            tooltip="Ingrese la ciudad donde trabaja"
                            tooltipOptions={{position: 'bottom'}}
                            autoResize
                            name="ciudad"
                            value={formik.values.ciudad}
                            onChange={formik.handleChange}
                            className={classNames({ 'p-invalid': isFormFieldValid('ciudad') })}
                            />
                            <label htmlFor="ciudad" className={classNames({ 'p-error': isFormFieldValid('ciudad') })}>Mensaje del Email:</label>
                        </span>
                        <p className="mx-6 absolute" style={{top:'2.6rem'}}>{getFormErrorMessage('ciudad')}</p>
                    </div>
                </div>
                
                <Button type="submit" label="Enviar Solicitud"/>
                <Button type="button" onClick={()=>history.push('/log')} label="Recordé mi contraseña" className="p-button-text"/>
            </ScrollPanel>
        </form>
  )
}

export default SendEmailPass