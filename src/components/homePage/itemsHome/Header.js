import classNames from 'classnames'
import { Menu } from 'primereact/menu'
import { Button } from 'primereact/button'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CredencialService from '../../../service/CredencialService'
import { BreadCrumb } from 'primereact/breadcrumb'

const Header = () => {
    
    const history = new useHistory()

    const logo = require('../../../assets/images/logo-fxa-version-principal.svg')

    const menu = useRef(null);

    const toggleMenu = (event) => {
      menu.current.toggle(event);
  };

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
                    label:"Cuenta",
                    icon: 'pi pi-tag',
                    command:()=>redireccionar('/')
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

  const homeBreadMenu = { icon: 'pi pi-home', url: '/#/' }

  return (<div className='block h-6rem'>
    <div className="layout-topbar">
            <div className='blur-topbar'></div>
            <Link to="/" className="layout-topbar-logo">
                <img src={logo} alt="logo"/>
                <small className='mx-4'>Recursos Humanos</small>
            </Link>
        
            {localStorage.getItem('token') && <>
            
              <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={toggleMenu}>
                  <i className="pi pi-user" />
              </button>

              <BreadCrumb home={homeBreadMenu} style={{background:'transparent', border:'none'}}/>

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

        </div>
  </div>)
}

export default Header