import React, { useEffect, useRef, useState } from 'react';
import { EmpleadoService } from '../../service/EmpleadoService';
import { TabView, TabPanel } from 'primereact/tabview';

import { Button } from 'primereact/button';
import CredencialService from '../../service/CredencialService';
import { Datos } from './tabMenuPerfil/Datos';
import { Empresa } from './tabMenuPerfil/Empresa';
import { Extras } from './tabMenuPerfil/Extras';
import { Riesgo } from './tabMenuPerfil/Riesgo';
import { useHistory } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import ChangeFotografia from './ChangeFotografia';

export const Perfil = (params) => {

    const history = new useHistory()

    const [empleado, setEmpleado] = useState({});


    const [loading, setLoading] = useState(true);
    const toast = useRef(null);

    useEffect(() => {
        const credencialService = new CredencialService()
        const empleadoService = new EmpleadoService()

        credencialService.getDatatopbar().then(res=>{
            empleadoService.getInfoPerfil(res.data.id).then(resp=>{
                setEmpleado(resp.data)
                setLoading(false)
            })
        })
        
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    const [ showChangeIgame, setshowChangeIgame ] = useState(false)

    const [ changeFotoModal, setChangeFotoModal] = useState(true)

    const showModal = () =>{
        setChangeFotoModal(true)
    }

    const hideModal = () =>{
        setChangeFotoModal(false)
    }


  return (
    <>
        {loading &&
            <div>cargando...</div>
        }
        {!loading &&
        <div className='grid card'>
            <div className="col-12 xl:col-9 lg:col-8 md:col-8 text-center">
                <h5>{empleado.nombres} {empleado.apellidos}</h5>
                <div className='w-full flex align-items-center justify-content-center block xl:hidden md:hidden lg:hidden'>
                    <img className='w-5' style={{maxWidth:'150px'}} src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-iconos-sociales-de-icono-de-trazo-de-color.png" alt="" />
                </div>
                <div className="card">
                        <TabView className='hidden xl:block lg:block md:block sm:block'>
                            <TabPanel header='Datos' leftIcon='pi pi-user'>
                                <Datos empleado={empleado}/> 
                            </TabPanel>
                            <TabPanel header='Empresa' leftIcon='pi pi-building'>
                                <Empresa empleado={empleado}/>
                            </TabPanel>
                            <TabPanel header='Complementarios' leftIcon='pi pi-paperclip'>
                               <Extras empleado={empleado}/>
                            </TabPanel>
                            <TabPanel header='Afiliaciones' leftIcon='pi pi-heart-fill'>
                                <Riesgo empleado={empleado}/>
                            </TabPanel>
                        </TabView>
                        <TabView className='block xl:hidden lg:hidden md:hidden sm:hidden'>
                            <TabPanel leftIcon='pi pi-user'>
                                {/* <Datos empleado={params.formik}/> */}
                            </TabPanel>
                            <TabPanel leftIcon='pi pi-building'>
                                {/* <Empresa empleado={params.formik}/> */}
                            </TabPanel>
                            <TabPanel leftIcon='pi pi-paperclip'>
                               {/*  <Extras empleado={params.formik}/> */}
                            </TabPanel>
                            <TabPanel leftIcon='pi pi-heart-fill'>
                                {/* <Riesgo empleado={params.formik}/> */}
                            </TabPanel>
                        </TabView>
                </div>
            </div>
            <div className="col-12 xl:col-3 lg:col-4 md:col-4">
                <div className='card hidden xl:block md:block lg:block relative' onMouseEnter={()=>setshowChangeIgame(true)} onMouseLeave={()=>setshowChangeIgame(false)}>
                    <img className='w-full' style={{maxWidth:'180px'}} src="https://drm2ecjli5gr8.cloudfront.net/efectos/grandes/polaroidStyle.jpg" alt="" />
                    <div onClick={showModal} className={showChangeIgame?'flex card w-full justify-content-center top-0 align-items-center right-0 h-full absolute cursor-pointer':'hidden'} style={{background:'rgba(1,1,1,0.2)'}}>
                        <i className="pi pi-undo text-4xl"></i>
                    </div>
                </div>
               <div className="card">
                    <div className="mb-6">
                        <h5>Documentos:<i onClick={()=>history.push("/dash/documentos")} className="pi pi-arrow-right text-lg mx-3 cursor-pointer" /></h5>
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
        <Dialog header='Cambiar Fotografía' draggable={false} position='center' blockScroll={true} visible={changeFotoModal} style={{ width: '35vw' }} breakpoints={{'1150px': '45vw', '960px': '65vw', '640px': '100vw'}} onHide={hideModal}>
            <ChangeFotografia toast={toast}/>
        </Dialog>
        <Toast ref={toast}></Toast>
    </>
  )
};
