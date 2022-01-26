import React, { useEffect, useState } from 'react';
import { EmpleadoService } from '../../service/EmpleadoService';
import { TabView, TabPanel } from 'primereact/tabview';

import './usuario.css'
import { Button } from 'primereact/button';
import { Datos } from './tabMenu/Datos';
import { Empresa } from './tabMenu/Empresa';
import { Extras } from './tabMenu/Extras';
import { Riesgo } from './tabMenu/Riesgo';
import classNames from 'classnames';



export const Usuario = (params) => {

    const [empleado, setEmpleado] = useState({});

    const [loading, setLoading] = useState(true);
    


    useEffect(() => {
        const empleadoService = new EmpleadoService()
        empleadoService.getEmpleado(params.idUsuario).then(res=>{
            setEmpleado(res.data)
            params.formik.setValues({...res.data,datos:''})
            params.setEmpleadoDialog(res.data)
            setLoading(false)
        })
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        params.setEmpleadoDialog(empleado)
    },[params.empleadoDialog]) // eslint-disable-line react-hooks/exhaustive-deps

    const isFormFieldValid = (name) => !!(params.formik.touched[name] && params.formik.errors[name]);

    const headerTab = (label, errorItem) =>{
        return (
            <span className={classNames({ 'p-error font-bold': isFormFieldValid(errorItem) })}><i className={isFormFieldValid('datos')?"pi pi-exclamation-circle":'pi pi-user'}/>{label}</span>
        )
    }

  return (
    <>
        {loading &&
            <div>cargando...</div>
        }
        {!loading &&
        <div className='grid'>
            <div className="col-12 xl:col-8 text-center">
                <h5>{empleado.nombres} {empleado.apellidos}</h5>
                <div className="card">
                    <form onSubmit={params.formik.handleSubmit}>
                        <TabView>
                            <TabPanel header={headerTab('Datos','datos')}>
                                <Datos empleado={params.formik}/>
                            </TabPanel>
                            <TabPanel header="Empresa" leftIcon="pi pi-building">
                                <Empresa empleado={params.formik}/>
                            </TabPanel>
                            <TabPanel header="Extras" leftIcon="pi pi-paperclip">
                                <Extras empleado={params.formik}/>
                            </TabPanel>
                            <TabPanel header="Riesgos" leftIcon="pi pi-heart-fill">
                                <Riesgo empleado={params.formik}/>
                            </TabPanel>
                        </TabView>
                    </form>
                </div>
            </div>
            <div className="col-12 xl:col-4">
                <div className='card'>
                    <img className='w-full' src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-iconos-sociales-de-icono-de-trazo-de-color.png" alt="" />
                </div>
                <div className="card">
                    <div className="mb-6">
                        <h5>Documentos:<i className="pi pi-arrow-right text-lg mx-3 cursor-pointer" /></h5>
                        <Button label="ejemplo-de-un-pdf.pdf" className="p-button-link text-sm"></Button>
                        <Button label="nomina-de-ejemplo.pdf" className="p-button-link text-sm"></Button>
                        <Button label="hoja-de-vida.pdf" className="p-button-link text-sm"></Button>
                    </div>
                    <h6>Documentos Faltantes:</h6>
                    <div className='text-yellow-500'><i className="pi pi-times-circle mx-1" />Contrato</div>
                    <div className='text-yellow-500'><i className="pi pi-times-circle mx-1" />Cuenta</div>
                </div>
            </div>
        </div>
        }
    </>
  )
};
