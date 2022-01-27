
import React, { useState, useEffect, useRef } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { EmpleadoService } from '../../service/EmpleadoService';
import './DataTableDemo.css';
import { Usuario } from './Usuario';
import FormikEmp from './formikUsuario';
import NewUsuario from './NewUsuario';

export const Usuarios = () => {
    const [empleados, setEmpleados] = useState(null);
    const [filters1, setFilters1] = useState(null);
    const [globalFilterValue1, setGlobalFilterValue1] = useState('');
    const [loading1, setLoading1] = useState(true);

    const empleadoService = new EmpleadoService();

    const [toatsEmpelado, setToatsEmpelado] = useState({});
    const toast = useRef(null);

    useEffect(()=>{
        if(toatsEmpelado.severity){
            toast.current.show(toatsEmpelado);
        }
    },[toatsEmpelado])


    useEffect(() => {
        empleadoService.getEmpleados().then(res => { setEmpleados(res.data); setLoading1(false) });
        initFilters1();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const clearFilter1 = () => {
        initFilters1();
    }

    const onGlobalFilterChange1 = (e) => {
        const value = e.target.value;
        let _filters1 = { ...filters1 };
        _filters1['global'].value = value;

        setFilters1(_filters1);
        setGlobalFilterValue1(value);
    }

    const initFilters1 = () => {
        setFilters1({
            'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
            'nombres': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'empresa.nombre_empresa': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'lugar_trabajo.nombre_ciudad': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'centro_costo.nombre_centro_costo': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'numero_identificacion': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'fecha_ingreso': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        });
        setGlobalFilterValue1('');
    }

    const [dataView, setDataView] = useState(false);

    const cambiarEstilo = (i) =>{
        setDataView(i)
    }

    const renderHeadTable = () =>{
        return (
            <div className='grid  my-4'>
                <div className='col-10 hidden xl:block lg:block'>
                    <Button onClick={showModalNewUsu} icon="pi pi-plus" className="p-button-rounded mx-4"></Button>
                    <Button icon="pi pi-user-plus" iconPos="right" label="Agregar Varios" className="p-button-rounded p-button-outlined mx-2" />
                    <Button icon="pi pi-file-pdf" iconPos="right" label="Generar Reporte" className="p-button-rounded p-button-outlined mx-2" />
                    <Button icon="pi pi-download" iconPos="right" label="Generar CSV" className="p-button-rounded p-button-outlined mx-2" />
                </div>
                <div className='col-8 md:col-10 block xl:hidden lg:hidden'>
                    <Button onClick={showModalNewUsu} icon="pi pi-plus" className="p-button-rounded mx-3 my-1"></Button>
                    <Button icon="pi pi-user-plus" iconPos="right" className="p-button-rounded p-button-outlined mx-3 my-1" />
                    <Button icon="pi pi-file-pdf" iconPos="right" className="p-button-rounded p-button-outlined mx-3 my-1" />
                    <Button icon="pi pi-download" iconPos="right" className="p-button-rounded p-button-outlined mx-3 my-1" />
                </div>
                <div className='col-4 xl:col-2 lg:col-2 md:col-2'>
                    <span className="p-buttonset">
                        <Button onClick={()=>cambiarEstilo(false)} className={dataView?"p-button-outlined":""} icon="pi pi-table text-xl mx-2" />
                        <Button onClick={()=>cambiarEstilo(true)} className={dataView?"":"p-button-outlined"} icon="pi pi-list text-xl mx-2" />
                    </span>
                </div>
            </div>
        )
    }

    const renderHeader1 = () => {
        return (
            <div className=" grid">
                <div className='col-12 xl:col-7 lg:col-5 md:col-5 sm:col-4'>
                    <h4>Usuarios Activos <i className="pi pi-arrow-circle-right text-xl mx-3 cursor-pointer" /></h4>
                    
                </div>
                <div className='col-12 xl:col-5 lg:col-7 md:col-7 sm:col-6'>
                    <Button type="button" icon="pi pi-filter-slash" label="Borrar" className="hidden xl:inline-block lg:inline-block mb-2 p-button-outlined mx-4" onClick={clearFilter1} />
                    <Button type="button" icon="pi pi-filter-slash" className="inline-block xl:hidden lg:hidden mb-2 p-button-outlined mx-4" onClick={clearFilter1} />
                    <span className="p-input-icon-left mb-2">
                        <i className="pi pi-search" />
                        <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Buscar" />
                    </span>
                </div>
            </div>
        )
    }

    const accionesBody = rowData =>{
        return(
            <div className='w-full flex align-items-center justify-content-center'>
                <Button onClick={()=>showModal(rowData.id_empleado)} icon="pi pi-eye" className="p-button-rounded p-button-outlined mx-2" />
            </div>
        )
    }

    const avatarTableBody = () =>{
        return (
            <div className='w-full flex align-items-center justify-content-center'>
                <img className='border-circle' width={50} src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-iconos-sociales-de-icono-de-trazo-de-color.png" alt="avatar" />
            </div>
        )
    }

    const [modalUsuario, setModalUsuario] = useState(false);
    const [idUsuario, setIdUsuario] = useState(null)

    const showModal = (id) =>{
        setIdUsuario(id)
        setModalUsuario(true)
    }

    const showModalNewUsu = () =>{
        empleadoFormik.resetForm()
        empleadoFormik.setValues({
            nombres:'',
            apellidos:'',
            id_tipo_identificacion_fk:'',
            numero_identificacion:'',
            genero:0
        })
        setNewUsuDialog(true)
    }

    const hideModal = () =>{
        setModalUsuario(false)
        setNewUsuDialog(false)
    }

    const header1 = renderHeader1();

    const formikUsuario = new FormikEmp()
    const empleadoFormik = formikUsuario.formikUsuario({setToatsEmpelado:setToatsEmpelado, hideModal:hideModal})

    const [empleadoDialog, setEmpleadoDialog] = useState({});
    

    const [buttonsDialog, setButtonsDialog] = useState(false);

    useEffect(()=>{
        if(empleadoDialog.id_empleado){
            setButtonsDialog(true)
        }else{
            setButtonsDialog(false)
        }
    }, [empleadoFormik.values]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleButtonSubmit = () =>{
        empleadoFormik.handleSubmit()
    }

    const dialogHeader = () =>{
        return (
            <div className='flex justify-content-end'>
                <div className={buttonsDialog?'block':'hidden'}>
                    <Button onClick={() => {empleadoFormik.setValues(empleadoDialog); setEmpleadoDialog({}) }} icon="pi pi-replay" className="p-button-rounded p-button-outlined mx-2" />
                    <Button type="button" onClick={handleButtonSubmit} icon="pi pi-check" className="p-button-rounded p-button-outlined mx-2" />
                </div>
                <Button onClick={hideModal} icon="pi pi-times" className="p-button-rounded p-button-outlined mx-2" />
            </div>
        )
    }

    const [newUsuDialog, setNewUsuDialog] = useState(false);

    return (
        <div className="datatable-filter-demo">
            <Toast ref={toast} position="bottom-right"/>
            <div className="card">
                {renderHeadTable()}
                {dataView === false &&
                    <DataTable value={empleados} paginator className="p-datatable-customers datatable-responsive" rows={5}
                        dataKey="id" rowsPerPageOptions={[5, 10, 25, 50, 100]} filters={filters1} filterDisplay="menu" loading={loading1} responsiveLayout="stack"
                        globalFilterFields={['nombres', 'empresa.nombre_empresa', 'lugar_trabajo.nombre_ciudad', 'centro_costo.nombre_centro_costo', 'numero_identificacion']} header={header1} paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown" emptyMessage="No se encontraron Empleados" currentPageReportTemplate="Registros {first} a {last} de un total de {totalRecords}">
                        <Column body={avatarTableBody()} style={{ minWidth: '5rem' }} />
                        <Column field='nombres' header="Nombres" sortable filter filterPlaceholder="Buscar Por Nombre" style={{ minWidth: '10rem' }} />
                        <Column header="Empresa" style={{ minWidth: '12rem' }} sortable field='empresa.nombre_empresa' filter filterPlaceholder="Buscar Por Empresa"/>
                        <Column header="Lugar Trabajo" style={{ minWidth: '12rem' }} sortable field='lugar_trabajo.nombre_ciudad' filter filterPlaceholder="Buscar Por Lugar Trabajo"/>
                        <Column header="Centro Costo" style={{ minWidth: '12rem' }} sortable field='centro_costo.nombre_centro_costo' filter filterPlaceholder="Buscar Por Centro Costo"/>
                        <Column header="Número Documento" style={{ minWidth: '10rem' }} sortable field='numero_identificacion' filter filterPlaceholder="Buscar Por Número Documento"/>
                        <Column header="Opciones" style={{ minWidth: '8rem' }} body={accionesBody}/>
                    </DataTable>
                }
                {dataView === true &&
                    <DataTable value={empleados} paginator className="p-datatable-customers datatable-responsive" rows={10}
                        dataKey="id" rowsPerPageOptions={[10, 25, 50, 100]} filters={filters1} size="small" filterDisplay="menu" loading={loading1} responsiveLayout="scroll"
                        globalFilterFields={['nombres', 'empresa.nombre_empresa', 'lugar_trabajo.nombre_ciudad', 'centro_costo.nombre_centro_costo', 'numero_identificacion']} header={header1} paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown" emptyMessage="No se encontraron Empleados" currentPageReportTemplate="Registros {first} a {last} de un total de {totalRecords}">
                        <Column field='nombres' header="Nombres" sortable filter filterPlaceholder="Buscar Por Nombre" style={{ minWidth: '10rem'}} />
                        <Column header="Empresa" style={{ minWidth: '12rem' }} sortable field='empresa.nombre_empresa' filter filterPlaceholder="Buscar Por Empresa"/>
                        <Column header="Lugar Trabajo" style={{ minWidth: '12rem' }} sortable field='lugar_trabajo.nombre_ciudad' filter filterPlaceholder="Buscar Por Lugar Trabajo"/>
                        <Column header="Centro Costo" style={{ minWidth: '12rem' }} sortable field='centro_costo.nombre_centro_costo' filter filterPlaceholder="Buscar Por Centro Costo"/>
                        <Column header="Número Documento" style={{ minWidth: '10rem' }} sortable field='numero_identificacion' filter filterPlaceholder="Buscar Por Número Documento"/>
                        <Column header="Fecha Ingreso" style={{ minWidth: '10rem' }} sortable field='fecha_ingreso' filter filterPlaceholder="Buscar Por Fecha Ingreso"/>
                        <Column header="Opciones" style={{ minWidth: '8rem' }} body={accionesBody}/>
                    </DataTable>
                }
                <Dialog header={dialogHeader} closable={false} draggable={false} position='center' blockScroll={true} visible={modalUsuario} style={{ width: '52vw' }} breakpoints={{'1150px': '70vw', '960px': '80vw', '850px': '90vw', '760px':'97vw','700px': '100vw'}} onHide={hideModal}>
                    <Usuario idUsuario={idUsuario} formik={empleadoFormik} empleadoDialog={empleadoDialog} setEmpleadoDialog={setEmpleadoDialog}/>
                </Dialog>
                <Dialog header='Nuevo Empleado' draggable={false} position='center' blockScroll={true} visible={newUsuDialog} style={{ width: '50vw' }} breakpoints={{'1150px': '70vw', '960px': '75vw', '640px': '100vw'}} onHide={hideModal}>
                    <NewUsuario formik={empleadoFormik} />
                </Dialog>
            </div>

        </div>
    );
}
                 