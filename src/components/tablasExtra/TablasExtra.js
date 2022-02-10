import { TabPanel, TabView } from 'primereact/tabview';
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react';
import CentroCosto from './tablas/CentroCosto';
import DefaultData from './tablas/DefaultData';
import Empresa from './tablas/Empresa';

const TablasExtra = () => {

    const [centroCosto, setCentroCosto] = useState({})
    const [empresa, setEmpresa] = useState({})
    const [ciudades, setCiudades] = useState({})
    const [cargo, setCargo] = useState({})

    const toast = useRef(null);

  return <div className="card">
        <Toast ref={toast} position="bottom-right"/>
        <h3>Gestión De Campos Extras</h3>
        <TabView>
            <TabPanel header="Centro Costo">
               <CentroCosto toast={toast} setCentroCosto={setCentroCosto} centroCosto={centroCosto} setCiudades={setCiudades} ciudades={ciudades}/> 
            </TabPanel>
            <TabPanel header="Empresa">
                <Empresa toast={toast} setEmpresa={setEmpresa} empresa={empresa}/>
            </TabPanel>
            <TabPanel header="Cargo">
                <DefaultData name='Cargo' nombre='cargo' data={cargo} setData={setCargo}/>
            </TabPanel>
        </TabView>
    </div>
};

export default TablasExtra;
