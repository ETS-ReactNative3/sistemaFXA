import React from 'react';
import classNames from 'classnames';
import { TabPanel, TabView } from 'primereact/tabview';
import Datos from './tabMenuNew/Datos';

const NewUsuario = (params) => {
  
    const isFormFieldValid = (name) => !!(params.formik.touched[name] && params.formik.errors[name]);

    const headerTab = (label, errorItem, icon) =>{
        return (
            <span className={classNames({ 'p-error font-bold': isFormFieldValid(errorItem) })}><i className={isFormFieldValid(errorItem)?"pi pi-exclamation-circle":icon}/>{label}</span>
        )
    }

    return (
    <div>
        <div className="card">
            <form onSubmit={params.formik.handleSubmit}>
            <TabView className='hidden xl:block lg:block md:block sm:block'>
                            <TabPanel header={headerTab('Datos','datos','pi pi-user')}>
                                <Datos formik={params.formik}/>
                            </TabPanel>
                            <TabPanel header={headerTab('Empresa','empresa','pi pi-building')}>
                                {/* <Empresa empleado={params.formik}/> */}
                            </TabPanel>
                            <TabPanel header={headerTab('Complementarios','extras','pi pi-paperclip')}>
                               {/*  <Extras empleado={params.formik}/> */}
                            </TabPanel>
                            <TabPanel header={headerTab('Riesgos','riesgos','pi pi-heart-fill')}>
                               {/*  <Riesgo empleado={params.formik}/> */}
                            </TabPanel>
                        </TabView>
                        <TabView className='block xl:hidden lg:hidden md:hidden sm:hidden'>
                            <TabPanel header={headerTab('','datos','pi pi-user')}>
                                <Datos formik={params.formik}/>
                            </TabPanel>
                            <TabPanel header={headerTab('','empresa','pi pi-building')}>
                                {/* <Empresa empleado={params.formik}/> */}
                            </TabPanel>
                            <TabPanel header={headerTab('','extras','pi pi-paperclip')}>
                               {/*  <Extras empleado={params.formik}/> */}
                            </TabPanel>
                            <TabPanel header={headerTab('','riesgos','pi pi-heart-fill')}>
                               {/*  <Riesgo empleado={params.formik}/> */}
                            </TabPanel>
                        </TabView>
            </form>
        </div>
    </div>
  )
};

export default NewUsuario;
