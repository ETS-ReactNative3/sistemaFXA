import { TabPanel, TabView } from 'primereact/tabview';
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react';
import CentroCosto from './tablas/CentroCosto';

const TablasExtra = () => {

    const [centroCosto, setCentroCosto] = useState({})
    const [ciudades, setCiudades] = useState({})

    const toast = useRef(null);

  return <div className="card">
        <Toast ref={toast} position="bottom-right"/>
        <h3>Gestión De Campos Extras</h3>
        <TabView>
            <TabPanel header="Centro Costo">
               <CentroCosto toast={toast} setCentroCosto={setCentroCosto} centroCosto={centroCosto} setCiudades={setCiudades} ciudades={ciudades}/> 
            </TabPanel>
            <TabPanel header="Empresa">
                
            </TabPanel>
            <TabPanel header="Header III">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </TabPanel>
        </TabView>
    </div>
};

export default TablasExtra;
