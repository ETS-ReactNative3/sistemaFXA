import classNames from 'classnames';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import React, { useEffect, useRef, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from "react-scroll";
import CredencialService from '../../../service/CredencialService';
import Cuenta from '../../cuenta/Cuenta';

import './HeaderStyles.css'

const Header2 = () => {

  const toast = useRef(null);

  const logo = require('../../../assets/images/logo-fxa-version-principal.svg')

  const [infoTopBar, setInfoTopBar] = useState({})

  const [overlayMenuItems, setOverlayMenuItems] = useState([])

  const [ dialogCuenta, setDialogCuenta] = useState(false)

  const history = new useHistory()
  
  const redireccionar = (ruta) =>{
    history.push(ruta)
  }

  const cerrarSesion = () =>{
    localStorage.removeItem('token')
    history.push("/log")
  }

  const menu = useRef(null);

  const toggleMenu = (event) => {
    menu.current.toggle(event);
  };

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


  return (
    <div className="layout-topbar">
      
      <Toast ref={toast} position="bottom-right"/>

      <div style={{background:'#E31D93'}} className='w-full absolute top-0 left-0 h-2rem align-items-center justify-content-center flex'>
          <span className='font-medium' style={{color:'#fff'}}>Recursos Humanos (SIGE)</span>
      </div>

      <div className="align-items-end justify-content-end sm:w-full grid" style={{maxWidth:'35vw'}}>
        <Link
        activeClass="text-purple-300"
        to="Part1"
        spy={true}
        smooth={'easeInCubic'}
        duration={800}
        >
          <i className='pi pi-home text-xl mx-1 sm:mx-3 cursor-pointer' style={{marginTop:'2.4rem'}}/>
        </Link>
        <Link
        activeClass="text-purple-300"
        to="Part2"
        spy={true}
        smooth={'easeInCubic'}
        duration={800}
        >
          <i className='pi pi-book text-xl mx-1 sm:mx-3 cursor-pointer' style={{marginTop:'2.4rem'}}/>
        </Link>
        <Link
        activeClass="text-purple-300"
        to="Part3"
        spy={true}
        smooth={'easeInCubic'}
        duration={800}
        >
          <i className='pi pi-heart text-xl mx-1 sm:mx-3 cursor-pointer' style={{marginTop:'2.4rem'}}/>
        </Link>
        <Link
        activeClass="text-purple-300"
        to="Footer"
        spy={true}
        smooth={'easeInCubic'}
        duration={800}
        >
          <i className='pi pi-info-circle text-xl mx-1 sm:mx-3 cursor-pointer' style={{marginTop:'2.4rem'}}/>
        </Link>
      </div>

      <div className="conten-menu-mountain">
        <div className="menu-mountain card"/>
        <div className="menu-mountain2 card"/>
        <div className="menu-mountain3">
          <img src={logo} alt="logo" className='logo-menu-mountain'/>
        </div>
        <div className="menu-mountain4"/>
      </div>

      {localStorage.getItem('token') && <>
      
          <button type="button" className="p-link layout-topbar-menu-button absolute" style={{right:'1rem', top:'2.8rem'}} onClick={toggleMenu}>
              <i className="pi pi-user" />
          </button>

        <div className={classNames("layout-topbar-menu align-items-end justify-content-end grid")}>

                <Menu className="mt-1" ref={menu} model={overlayMenuItems} popup />

                <button className="p-link mx-1 sm:mx-3 cursor-pointer font-bold" style={{marginTop:'2rem'}} onClick={toggleMenu}>
                    <i className="pi pi-user px-2"/>
                    <span className="pl-2 pr-3">{infoTopBar.nombre}</span>
                </button>

        </div>
      </>}

      {!localStorage.getItem('token') && <>
        <Button label="Iniciar Sesión" onClick={()=>redireccionar('/log')} className="layout-topbar-menu p-button-text absolute py-3 px-4 font-medium" style={{right:'3rem', top:'1.5rem'}} />
        <Button tooltip='Iniciar Sesión' tooltipOptions={{position:'left'}} onClick={()=>redireccionar('/log')} className="pi pi-sign-in text-xl block lg:hidden p-button-text absolute py-3 px-4 font-medium" style={{right:'3rem', top:'1.5rem'}} />
      </>}
      
      <Dialog header={<h4 className='text-center'>Cambio de contraseña</h4>} draggable={false} position='center' blockScroll={true} visible={dialogCuenta} style={{ width: '25vw' }} breakpoints={{'1150px': '30vw', '960px': '35vw', '640px': '100vw'}} onHide={hideModal}>
        <Cuenta hideModal={hideModal} toast={toast}/>
      </Dialog>

      </div>
  )
}

export default Header2