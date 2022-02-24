import React, { useEffect, useRef, useState } from 'react';
import { EmpleadoService } from '../../service/EmpleadoService';

import { useHistory } from 'react-router-dom';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Dropdown } from 'primereact/dropdown';

export const Documentos = (params) => {

    const op = useRef(null);


    const [dataEmpleado, setDataEmpleado] = useState({});

    const [loading, setLoading] = useState(true);
    


    useEffect(() => {
        const empleadoService = new EmpleadoService()

        empleadoService.getDatosEmpDocs(params.idUsuario).then(resp=>{
            setDataEmpleado(resp.data)
            setLoading(false)
        })
        
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    const ItemService  = require('../../service/DefaultService');
    const itemService = ItemService.default('tipo-documento')
    const service = new itemService()

    useEffect(()=>{
        service.getAll().then(res=>{
            setDataOption(res.data)
        })
    },[])// eslint-disable-line 

    const [itemSeleccionado, setItemSeleccionado] = useState(null);
    const [dataOption, setDataOption] = useState([])

    const onItemChange = (e) =>{
        let value = e.value
        setItemSeleccionado(value);
    }

  return (
    <>
        {loading &&
            <div>cargando...</div>
        }
        {!loading &&
        <div className='grid card'>
            <div className="col-12 lg:col-8 md:col-8">
                <h5 className=' text-center'>{dataEmpleado.nombres} {dataEmpleado.apellidos}</h5>
                <div className='w-full flex align-items-center justify-content-center block xl:hidden md:hidden lg:hidden'>
                    <img className='w-5' style={{maxWidth:'150px'}} src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-iconos-sociales-de-icono-de-trazo-de-color.png" alt="" />
                </div>
                <div className="card">
                    <h5>Documentos:</h5>
                    <Divider align="left">
                        <div className="inline-flex align-items-center">
                            <b>Subidos</b>
                        </div>
                    </Divider>
                    <Divider align="left">
                        <div className="inline-flex align-items-center">
                            <b>Faltantes</b>
                            <Button icon="pi pi-plus" onClick={(e) => op.current.toggle(e)} className="p-button-text p-button-rounded mr-2 mb-2"></Button>
                        </div>
                    </Divider>
                </div>
            </div>
            <div className="col-12 lg:col-4 md:col-4">
                <div className='card hidden xl:block md:block lg:block'>
                    <img className='w-full' style={{maxWidth:'180px'}} src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-iconos-sociales-de-icono-de-trazo-de-color.png" alt="" />
                </div>
               <div className="card">
                    <h5>Datos:<i onClick={()=>params.changeModal(1)} className="pi pi-arrow-right text-lg mx-3 cursor-pointer" /></h5>
                    <p className='text-800 mb-2 font-medium text-sm'>Nombres: <span className='text-700'>{dataEmpleado.nombres}</span></p>
                    <p className='text-800 mb-2 font-medium text-sm'>Apellidos: <span className='text-700'>{dataEmpleado.apellidos}</span></p>
                    <p className='text-800 mb-2 font-medium text-sm'>Documento: <span className='text-700'>{dataEmpleado.tipo_identificacion.nombre_tipo_identificacion} {dataEmpleado.numero_identificacion}</span></p>
                    <p className='text-800 mb-2 font-medium text-sm'>Correo: <span className='text-700'>{dataEmpleado.correo_electronico}</span></p>
                    <p className='text-800 mb-2 font-medium text-sm'>Celular: <span className='text-700'>{dataEmpleado.celular}</span></p>
                    <p className='text-800 mb-2 font-medium text-sm'>Empresa: <span className='text-700'>{dataEmpleado.empresa.nombre_empresa}</span></p>
                    <p className='text-800 mb-2 font-medium text-sm'>Centro Costo: <span className='text-700'>{dataEmpleado.centro_costo.nombre_centro_costo}</span></p>
                    <p className='text-800 mb-2 font-medium text-sm'>Cargo: <span className='text-700'>{dataEmpleado.cargo.nombre_cargo}</span></p>
                </div>
            </div>
        </div>
        }
        <OverlayPanel ref={op} onHide={()=>setItemSeleccionado(null)} showCloseIcon id="overlay_panel" style={{ width: '250px', boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)' }} breakpoints={{'640px': '90vw'}}>
            <div className='w-full text-center'>
                <h6>Seleccione el tipo de doc a agregar</h6>
            </div>
            <div className="col-12 mt-5">
            <span className="p-float-label">
                    <Dropdown className='w-full' value={itemSeleccionado} options={dataOption} onChange={e=>onItemChange(e)} optionLabel='nombre_tipo_documento' filter filterBy='nombre_tipo_documento'
                    emptyMessage="No se encontraron resultados" emptyFilterMessage="No se encontraron resultados" />
                    <label>Tipo Documento Faltante:</label>
                </span>
            </div>
            <Button type='button' /* onClick={formik.handleSubmit} */ label='Guardar' className='mt-2 w-full'/>
        </OverlayPanel>
    </>
  )
};
