import classNames from 'classnames'
import { Menu } from 'primereact/menu'
import { Button } from 'primereact/button'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import CredencialService from '../../../service/CredencialService'
import { Dialog } from 'primereact/dialog'
import Cuenta from '../../cuenta/Cuenta'
import { Toast } from 'primereact/toast'

const Header = () => {
  
    const toast = useRef(null);

    const history = new useHistory()

    const logo = require('../../../assets/images/logo-fxa-version-principal.svg')

    const menu = useRef(null);

    const toggleMenu = (event) => {
      menu.current.toggle(event);
    };

  const [ dialogCuenta, setDialogCuenta] = useState(false)

  const hideModal = () =>{
    setDialogCuenta(false)
  }


  useEffect(() => {
    if(localStorage.getItem('token')){
      const credencialService = new CredencialService()

      credencialService.getDatatopbar().then(res=>{
          setInfoTopBar(res.data)
          setOverlayMenuItems([
              {

                label: res.data.nombre,
        
                items:[
                  {
                    label:"Seguridad",
                    icon: 'pi pi-sync',
                    command:()=>setDialogCuenta(true)
                },
                {
                    label:(res.data.Rol==='Soporte' || res.data.Rol==='Admin')?"Dashboard":"Perfil",
                    icon: (res.data.Rol==='Soporte' || res.data.Rol==='Admin')?'pi pi-briefcase':'pi pi-cog',
                    command:()=>redireccionar((res.data.Rol==='Soporte' || res.data.Rol==='Admin')?'/dash':'/dash/perfil')
                }
            ]
            },
        
            {
                separator: true
            },
            {
                label: 'Salir',
                icon: 'pi pi-sign-out',
                command: cerrarSesion
            }
          ])

      }) 
    }
}, []) //eslint-disable-line

  const [infoTopBar, setInfoTopBar] = useState({})

  
  const redireccionar = (ruta) =>{
    history.push(ruta)
  }

  const cerrarSesion = () =>{
    localStorage.removeItem('token')
    history.push("/log")
  }

  const [overlayMenuItems, setOverlayMenuItems] = useState([])

  return (<div className='top-0'>
    <Toast ref={toast} position="bottom-right"/>
    <div className="layout-topbar">
            <div className='blur-topbar'></div>
            <span className="layout-topbar-logo">
                <img src={logo} alt="logo"/>
                <small className='mx-4'>Recursos Humanos (SIGE)</small>
            </span>
            {localStorage.getItem('token') && <>
            
              <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={toggleMenu}>
                  <i className="pi pi-user" />
              </button>

              <div className={classNames("layout-topbar-menu lg:flex origin-top")}>

                      <Menu className="mt-1" ref={menu} model={overlayMenuItems} popup />

                      <button className="p-link perfil" onClick={toggleMenu}>
                          <i className="pi pi-user px-2"/>
                          <span className="pl-2 pr-3">{infoTopBar.nombre}</span>
                      </button>

              </div>
            </>}

            {!localStorage.getItem('token') && <>
              <Button label="Iniciar Sesión" onClick={()=>redireccionar('/log')} className="layout-topbar-menu py-2 px-3" />
            </>}

            <Dialog header={<h4 className='text-center'>Cambio de contraseña</h4>} draggable={false} position='center' blockScroll={true} visible={dialogCuenta} style={{ width: '25vw' }} breakpoints={{'1150px': '30vw', '960px': '35vw', '640px': '100vw'}} onHide={hideModal}>
                <Cuenta hideModal={hideModal} toast={toast}/>
            </Dialog>

        </div>
  </div>)
}

export default Header