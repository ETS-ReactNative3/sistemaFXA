import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { TabPanel, TabView } from 'primereact/tabview';
import { Accordion, AccordionTab } from 'primereact/accordion';
import CentroCosto from './tablas/CentroCosto';
import DefaultData from './tablas/DefaultData';
import Empresa from './tablas/Empresa';

const TablasExtra = () => {

    const [centroCosto, setCentroCosto] = useState({})
    const [empresa, setEmpresa] = useState({})
    const [cargo, setCargo] = useState({})
    const [pension, setPension] = useState({})
    const [eps, setEps] = useState({})
    const [arl, setArl] = useState({})
    const [cesantias, setCesantias] = useState({})
    const [cajaCompensacion, setCajaCompensacion] = useState({})
    const [tipoContrato, setTipoContrato] = useState({})
    const [tiempo, setTiempo] = useState({})
    const [estadoContrato, setEstadoContrato] = useState({})
    const [ciudad, setCiudad] = useState({})
    const [nacionalidad, setNacionalidad] = useState({})
    const [estadoCivil, setEstadoCivil] = useState({})
    const [banco, setBanco] = useState({})
    const [tipoCuenta, setTipoCuenta] = useState({})
    const [estudiosRelaizados, setEstudiosRelaizados] = useState({})
    const [tallaCamisa, setTallaCamisa] = useState({})

    const toast = useRef(null);

  return <div className="card">
        <Toast ref={toast} position="bottom-right"/>
        <h3>Gestión De Campos Extras</h3>
        
        <Accordion>
            <AccordionTab header="Datos Basicos">
                <TabView>
                    <TabPanel header="Ciudad">
                        <DefaultData toast={toast} name='Ciudad' nombre='ciudad' data={ciudad} setData={setCiudad} minMax={[3,25]}/>
                    </TabPanel> 
                    <TabPanel header="Nacionalidad">
                        <DefaultData toast={toast} name='Nacionalidad' nombre='nacionalidad' data={nacionalidad} setData={setNacionalidad} minMax={[3,25]}/>
                    </TabPanel> 
                    <TabPanel header="Estado Civil">
                        <DefaultData toast={toast} name='Estado Civil' model='estado-civil' nombre='estado_civil' data={estadoCivil} setData={setEstadoCivil} minMax={[3,25]}/>
                    </TabPanel> 
                </TabView>
            </AccordionTab>
            <AccordionTab header="Datos Empresa">
                <TabView>
                    <TabPanel header="Empresa">
                        <Empresa toast={toast} setEmpresa={setEmpresa} empresa={empresa}/>
                    </TabPanel>
                    <TabPanel header="Centro Costo">
                        <CentroCosto toast={toast} setCentroCosto={setCentroCosto} centroCosto={centroCosto} setCiudades={setCiudad} ciudades={ciudad}/> 
                    </TabPanel>
                    <TabPanel header="Cargo">
                        <DefaultData toast={toast} name='Cargo' nombre='cargo' data={cargo} setData={setCargo} minMax={[3,35]}/>
                    </TabPanel>
                    <TabPanel header="Tipo Contrato">
                        <DefaultData toast={toast} name='Tipo Contrato' model='tipo-contrato' nombre='tipo_contrato' data={tipoContrato} setData={setTipoContrato} minMax={[3,25]}/>
                    </TabPanel>
                    <TabPanel header="Tiempo">
                        <DefaultData toast={toast} name='Tiempo' nombre='tiempo' data={tiempo} setData={setTiempo} minMax={[3,25]}/>
                    </TabPanel>
                    <TabPanel header="Estado Contrato">
                        <DefaultData toast={toast} name='Estado Contrato' model='estado-contrato' nombre='estado_contrato' data={estadoContrato} setData={setEstadoContrato} minMax={[3,25]}/>
                    </TabPanel>
                </TabView>
            </AccordionTab>
            <AccordionTab header='Datos Complementarios'>
                <TabView>
                    <TabPanel header='Banco'>
                        <DefaultData toast={toast} name='Banco' nombre='banco' data={banco} setData={setBanco} minMax={[3,25]}/>
                    </TabPanel>
                    <TabPanel header='Tipo Cuenta'>
                        <DefaultData toast={toast} name='Tipo Cuenta' model='tipo-cuenta' nombre='tipo_cuenta' data={tipoCuenta} setData={setTipoCuenta} minMax={[3,25]}/>
                    </TabPanel>
                    <TabPanel header='Estudios Realizados'>
                        <DefaultData toast={toast} name='Estudios Realizados' model='estudios-realizados' nombre='estudios' data={estudiosRelaizados} setData={setEstudiosRelaizados} minMax={[3,25]}/>
                    </TabPanel>
                    <TabPanel header='Talla Camisa'>
                        <DefaultData toast={toast} name='Talla Camisa' model='talla-camisa' nombre='talla_camisa' data={tallaCamisa} setData={setTallaCamisa} minMax={[1,10]}/>
                    </TabPanel>
                </TabView>
            </AccordionTab>
            <AccordionTab header="Datos Afiliaciones">
                <TabView>
                    <TabPanel header="Eps">
                        <DefaultData toast={toast} name='Eps' nombre='eps' data={eps} setData={setEps} minMax={[3,30]}/>
                    </TabPanel>
                    <TabPanel header="Arl">
                        <DefaultData toast={toast} name='Arl' nombre='arl' data={arl} setData={setArl} minMax={[3,25]}/>
                    </TabPanel>
                    <TabPanel header="Pension">
                        <DefaultData toast={toast} name='Pension' nombre='pension' data={pension} setData={setPension} minMax={[3,25]}/>
                    </TabPanel>
                    <TabPanel header="Cesantias">
                        <DefaultData toast={toast} name='Cesantias' nombre='cesantias' data={cesantias} setData={setCesantias} minMax={[3,25]}/>
                    </TabPanel>
                    <TabPanel header="Caja Compensación">
                        <DefaultData toast={toast} name='Caja Compensación' model='caja-compensacion' nombre='caja_comp' data={cajaCompensacion} setData={setCajaCompensacion} minMax={[3,25]}/>
                    </TabPanel>
                </TabView> 
            </AccordionTab>
        </Accordion>
    </div>
};

export default TablasExtra;
