import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';

const Permisos = () => {

    const [globalFilterValue1, setGlobalFilterValue1] = useState('');

    const onGlobalFilterChange1 = (e) => {
        const value = e.target.value;
        setGlobalFilterValue1(value);
    }

    const header1 = () => {
        return (
            <div className=" grid">
                <div className='col-12 xl:col-7 lg:col-5 md:col-5 sm:col-4'>
                    <h4>Gestion De Permisos:</h4>
                    
                </div>
                <div className='col-12 xl:col-5 lg:col-7 md:col-7 sm:col-6'>
                    <span className="p-input-icon-left mb-2">
                        <i className="pi pi-search" />
                        <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Buscar" />
                    </span>
                </div>
            </div>
        )
    }

  return <div className='card'>
        <DataTable /* value={empleados} */ paginator className="p-datatable-customers datatable-responsive" rows={10}
        dataKey="id" rowsPerPageOptions={[10, 25, 50, 100]} size="small" filterDisplay="menu" /* loading={loading1} */ responsiveLayout="scroll"
        globalFilterFields={['nombres', 'empresa.nombre_empresa', 'lugar_trabajo.nombre_ciudad', 'centro_costo.nombre_centro_costo', 'numero_identificacion']} header={header1} paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown" emptyMessage="No se encontraron Empleados" currentPageReportTemplate="Registros {first} a {last} de un total de {totalRecords}">
            <Column field='nombres' header="Nombres" sortable filter filterPlaceholder="Buscar Por Nombre" style={{ minWidth: '10rem'}} />
            <Column header="Empresa" style={{ minWidth: '12rem' }} sortable field='empresa.nombre_empresa' filter filterPlaceholder="Buscar Por Empresa"/>
            <Column header="Opciones" style={{ minWidth: '8rem' }} /* body={accionesBody} *//>
        </DataTable>
  </div>;
};

export default Permisos;
