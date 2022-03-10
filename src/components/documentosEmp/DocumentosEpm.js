import React, { useEffect, useState,  useRef } from 'react';
import { EmpleadoService } from '../../service/EmpleadoService';

import CredencialService from '../../service/CredencialService';
import { useHistory } from 'react-router-dom';
import { Divider } from 'primereact/divider';
import DocumentosFaltantesService from '../../service/DocumentosFaltantesService';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';

export const DocumentosEmp = (params) => {

    const op = useRef(null);

    const history = new useHistory()

    const [dataEmpleado, setDataEmpleado] = useState({});

    const [loading, setLoading] = useState(true);

    const documentosFaltantesService = new DocumentosFaltantesService()

    const [documentosFaltantesData, setDocumentosFaltantesData] = useState([])

    useEffect(() => {
        const credencialService = new CredencialService()
        const empleadoService = new EmpleadoService()

        credencialService.getDatatopbar().then(res=>{
            empleadoService.getDatosEmpDocs(res.data.id).then(resp=>{
                setDataEmpleado(resp.data)
                setLoading(false)
            })
            documentosFaltantesService.getByIdEmp(res.data.id).then(res=>{
            setDocumentosFaltantesData(res.data)
            })
        })
        
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    const [ fileValue, setFileValue] = useState(null)

  return (
    <>
        {loading &&
            <div>cargando...</div>
        }
        {!loading &&
        <div className='grid card'>
            <div className="col-12 xl:col-9 lg:col-8 md:col-8">
                <h5 className='text-center'>{dataEmpleado.nombres} {dataEmpleado.apellidos}</h5>
                <div className='w-full flex align-items-center justify-content-center block xl:hidden md:hidden lg:hidden'>
                    <img className='w-5' style={{maxWidth:'150px'}} src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-iconos-sociales-de-icono-de-trazo-de-color.png" alt="" />
                </div>
                <div className="card">
                    <Divider align="left">
                        <div className="inline-flex align-items-center">
                            <b>Subidos</b>
                            <Button icon="pi pi-plus" onClick={(e) => op.current.toggle(e)} className="p-button-text p-button-rounded mb-2"></Button>
                        </div>
                    </Divider>
                    <Divider align="left">
                        <div className="inline-flex align-items-center">
                            <b>Faltantes</b>
                        </div>
                    </Divider>
                    {!documentosFaltantesData[0] && <div className='text-600 font-medium mb-2'>No cuenta con documentos faltantes</div>}
                    {
                        documentosFaltantesData.map((el,id)=>{
                            return <div key={id}>
                                <div className='text-600 font-medium mb-2'>
                                    <i className='pi pi-exclamation-circle mr-2 text-yellow-600'/>
                                    <span>{el.tipo_documento.nombre_tipo_documento}</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="col-12 xl:col-3 lg:col-4 md:col-4">
                <div className='card hidden xl:block md:block lg:block'>
                    <img className='w-full' style={{maxWidth:'180px'}} src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-iconos-sociales-de-icono-de-trazo-de-color.png" alt="" />
                </div>
               <div className="card">
                    <h5>Datos:<i onClick={()=>history.push("/dash/perfil")} className="pi pi-arrow-right text-lg mx-3 cursor-pointer" /></h5>
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
        <OverlayPanel ref={op} /* onHide={()=>setItemSeleccionado(null)} */ showCloseIcon id="overlay_panel" style={{ width: '250px', boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)' }} breakpoints={{'640px': '90vw'}}>
            <div className='w-full text-center'>
                <h6>Agregar Documento</h6>
            </div>
            <input id='file' name='file' type="file" accept='application/pdf' onChange={e=>setFileValue([e.currentTarget.files[0]])} />
            <Button type='button' onClick={()=>console.log(fileValue)} label='Guardar' className='mt-2 w-full'/>
        </OverlayPanel>
    </>
  )
};
