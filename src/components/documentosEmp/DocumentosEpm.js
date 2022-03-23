import React, { useEffect, useState,  useRef } from 'react';
import { EmpleadoService } from '../../service/EmpleadoService';

import CredencialService from '../../service/CredencialService';
import { useHistory } from 'react-router-dom';
import { Divider } from 'primereact/divider';
import DocumentosFaltantesService from '../../service/DocumentosFaltantesService';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { OverlayPanel } from 'primereact/overlaypanel';
import UploadFilesService from '../../service/UploadFilesService';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import DocumentosService from '../../service/DocumentosService';


export const DocumentosEmp = (params) => {

    const toast = useRef(null);

    const API = process.env.REACT_APP_API + '/img/perfil'

    const op = useRef(null);

    const history = new useHistory()

    const [dataEmpleado, setDataEmpleado] = useState({});

    const [loading, setLoading] = useState(true);

    const documentosFaltantesService = new DocumentosFaltantesService()

    const [documentosFaltantesData, setDocumentosFaltantesData] = useState([])

    const [documentosData, setDocumentosData] = useState([])

    const [ routeFile, setRouteFile] = useState(null)

    const [ reloadPage, setReloadPage] = useState(0)

    
    useEffect(() => {
        const documentosService = new DocumentosService()
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

            documentosService.getByIdEmp(res.data.id).then(res=>{
                setDocumentosData(res.data)
            })

        })
        empleadoService.getRouteImgPerfil().then(res=>{
            if(res.data)
                setRouteFile(`${API}/${res.data}`)
            else
                setRouteFile(`${API}/UsuarioDefault.webp`)
        })
        
    }, [reloadPage]);  // eslint-disable-line

    const [dataOption, setDataOption] = useState([])
    const [itemSeleccionado, setItemSeleccionado] = useState(null);


    const ItemService  = require('../../service/DefaultService');
    const itemService = ItemService.default('tipo-documento')
    const service = new itemService()

    useEffect(()=>{
        service.getAll().then(res=>{
            setDataOption(res.data)
        })
    },[])// eslint-disable-line 

    const onItemChange = (e) =>{
        let value = e.value
        setItemSeleccionado(value);
    }

    const hideModal = () =>{
        op.current.hide()
    }

    const uploadFilesService = new UploadFilesService()

    const uploadImage = ({files}) =>{
        const formData = new FormData();
        formData.append('file', files[0])
        formData.append('tipo_documento_fk', itemSeleccionado.id_tipo_documento)
    
        uploadFilesService.uploadFile(formData).then(res=>{
          toast.current.show({severity: 'success', summary: 'Todo Bien', detail: res.data});
          setReloadPage(reloadPage+1)
          hideModal()
        })
      }

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
                    <img className='w-5' style={{maxWidth:'150px', borderRadius:'5px'}} src={routeFile} alt="" />
                </div>
                <div className="card">
                    <Divider align="left">
                        <div className="inline-flex align-items-center">
                            <b>Subidos</b>
                            <Button icon="pi pi-plus" onClick={(e) => op.current.toggle(e)} className="p-button-text p-button-rounded mb-2"></Button>
                        </div>
                    </Divider>
{/* 
                    {documentosData && <>
                        {
                            documentosData.map((el,id)=>{
                                return <div className='text-600 font-medium mb-2' key={id}>
                                    <span>Carta Precentacion</span>
                                    <i className='pi pi-eye text-purple-600 ml-2 cursor-pointer' onClick={()=>window.open('http://192.168.0.54:3003/file/emp/SIGE_File_userId217_1648071291086_6.%20Apr.%20CALDERON%20BARRETO%20FREDDY%20STIBEN-CARTA%20DE%20PRESENTACION%20DEL%20APRENDIZ%20A%20LA%20EMPRESA.pdf')}/>
                                    <i className='pi pi-trash text-purple-600 ml-2 cursor-pointer' onClick={()=>window.open('http://192.168.0.54:3003/file/emp/SIGE_File_userId217_1648071291086_6.%20Apr.%20CALDERON%20BARRETO%20FREDDY%20STIBEN-CARTA%20DE%20PRESENTACION%20DEL%20APRENDIZ%20A%20LA%20EMPRESA.pdf')}/>
                                </div>
                            })
                        }
                        
                    </>} */}

                    
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
            <div className='card hidden xl:flex md:flex lg:flex relative justify-content-center align-items-center'>
                    <img className='w-full' style={{maxWidth:'180px', maxHeight:'180px', borderRadius:'5px'}} src={routeFile} alt="" />
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
        <OverlayPanel ref={op} onHide={()=>setItemSeleccionado(null)} showCloseIcon id="overlay_panel" style={{ width: '250px', boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)' }} breakpoints={{'640px': '90vw'}}>
            
            <div className='w-full text-center'>
                <h5>Agregar Documento</h5>
            </div>
            
            <div className="col-12 mt-5 mb-3">
                <span className="p-float-label">
                    <Dropdown className='w-full' value={itemSeleccionado} options={dataOption} onChange={e=>onItemChange(e)} optionLabel='nombre_tipo_documento' filter filterBy='nombre_tipo_documento'
                    emptyMessage="No se encontraron resultados" emptyFilterMessage="No se encontraron resultados" />
                    <label>Tipo Documento:</label>
                </span>
            </div>
            <div className="col-12 justify-content-center flex">
                {itemSeleccionado && <>
                    <FileUpload name="demo" url="./upload" mode="basic" accept='application/pdf'
                    chooseLabel='Elija el archivo a subir' customUpload uploadHandler={uploadImage}/>
                </>}
            </div>
        </OverlayPanel>
        <Toast ref={toast} position='bottom-right'></Toast>
    </>
  )
};
