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
            params.formik.setValues({...res.data,datos:'',extras:'', riesgos:''})
            params.setEmpleadoDialog(res.data)
            setLoading(false)
        })
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        params.setEmpleadoDialog(empleado)
    },[params.empleadoDialog]) // eslint-disable-line react-hooks/exhaustive-deps

    const isFormFieldValid = (name) => !!(params.formik.touched[name] && params.formik.errors[name]);

    const headerTab = (label, errorItem, icon) =>{
        return (
            <span className={classNames({ 'p-error font-bold': isFormFieldValid(errorItem) })}><i className={isFormFieldValid(errorItem)?"pi pi-exclamation-circle":icon}/>{label}</span>
        )
    }

  return (
    <>
        {loading &&
            <div>cargando...</div>
        }
        {!loading &&
        <div className='grid'>
            <div className="col-12 xl:col-8 lg:col-8 md:col-8 text-center">
                <h5>{empleado.nombres} {empleado.apellidos}</h5>
                <div className='w-full flex align-items-center justify-content-center block xl:hidden md:hidden lg:hidden'>
                    <img className='w-5' style={{maxWidth:'150px'}} src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-iconos-sociales-de-icono-de-trazo-de-color.png" alt="" />
                </div>
                <div className="card">
                    <form onSubmit={params.formik.handleSubmit}>
                        <TabView className='hidden xl:block lg:block md:block sm:block'>
                            <TabPanel header={headerTab('Datos','datos','pi pi-user')}>
                                <Datos empleado={params.formik}/>
                            </TabPanel>
                            <TabPanel header={headerTab('Empresa','empresa','pi pi-building')}>
                                <Empresa empleado={params.formik}/>
                            </TabPanel>
                            <TabPanel header={headerTab('Complementarios','extras','pi pi-paperclip')}>
                                <Extras empleado={params.formik}/>
                            </TabPanel>
                            <TabPanel header={headerTab('Afiliaciones','riesgos','pi pi-heart-fill')}>
                                <Riesgo empleado={params.formik}/>
                            </TabPanel>
                        </TabView>
                        <TabView className='block xl:hidden lg:hidden md:hidden sm:hidden'>
                            <TabPanel header={headerTab('','datos','pi pi-user')}>
                                <Datos empleado={params.formik}/>
                            </TabPanel>
                            <TabPanel header={headerTab('','empresa','pi pi-building')}>
                                <Empresa empleado={params.formik}/>
                            </TabPanel>
                            <TabPanel header={headerTab('','extras','pi pi-paperclip')}>
                                <Extras empleado={params.formik}/>
                            </TabPanel>
                            <TabPanel header={headerTab('','riesgos','pi pi-heart-fill')}>
                                <Riesgo empleado={params.formik}/>
                            </TabPanel>
                        </TabView>
                    </form>
                </div>
            </div>
            <div className="col-12 xl:col-4 lg:col-4 md:col-4">
                <div className='card hidden xl:block md:block lg:block'>
                    <img className='w-full'  src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-iconos-sociales-de-icono-de-trazo-de-color.png" alt="" />
                </div>
                <div className="card">
                    <div className="mb-6">
                        <h5>Documentos:<i onClick={()=>params.changeModal(0)}className="pi pi-arrow-right text-lg mx-3 cursor-pointer" /></h5>
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
