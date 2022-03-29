import classNames from 'classnames';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar'
import { Menu } from 'primereact/menu'
import React,  { useRef, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import CredencialService from '../../../service/CredencialService';

const img =  require('./../../../assets/images/logo-fxa-version-principal.svg') 
const TopMenu = () => {

    const history = new useHistory()
  
    const redireccionar = (ruta) =>{
        history.push(ruta)
    }

    const menu = useRef(null);

    const [infoTopBar, setInfoTopBar] = useState({})
    const [overlayMenuItems, setOverlayMenuItems] = useState([])

    const cerrarSesion = () =>{
        localStorage.removeItem('token')
        history.push("/log")
      }

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
                        label:(res.data.Rol==='Soporte' || res.data.Rol==='Admin')?"Dashboard":"Perfil",
                        icon: (res.data.Rol==='Soporte' || res.data.Rol==='Admin')?'pi pi-briefcase':'pi pi-cog',
                        command:()=>redireccionar((res.data.Rol==='Soporte' || res.data.Rol==='Admin')?'/dash':'/dash/perfil')
                    },
                    {
                        label:'Inicio',
                        icon: 'pi pi-home',
                        command:()=>redireccionar('/')
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
    

    const items = [
        {
            label: 'Presentación',
            icon: 'pi pi-fw pi-info-circle',
            command:()=>redireccionar('/guia-uso')
        },
        {
            label: 'Manuales',
            icon: 'pi pi-fw pi-book',
            items: [
                {
                    label: 'Rol Empleado',
                    icon: 'pi pi-fw pi-user',
                    command:()=>redireccionar('/guia-uso/manual-empleado')
                },
                {
                    label: 'Rol Admin',
                    icon: 'pi pi-fw pi-briefcase'
                },
                {
                    label: 'Rol Soporte',
                    icon: 'pi pi-fw pi-star'
                }

            ]
        }
    ];

    const start = <img alt="logo" src={img} height="40" className="mr-2" />;
    const end = ()=>{
        return <>
            {localStorage.getItem('token') && <>
                
                <button type="button" className="p-link  block sm:hidden mx-3" onClick={toggleMenu}>
                    <i className="pi pi-user" />
                </button>

                <div className={classNames("hidden sm:block align-items-end justify-content-end grid")}>

                        <Menu className="mt-1" ref={menu} model={overlayMenuItems} popup />

                        <button className="p-link mx-3 cursor-pointer font-bold" onClick={toggleMenu}>
                            <i className="pi pi-user px-2"/>
                            <span className="pl-2 pr-3">{infoTopBar.nombre}</span>
                        </button>

                </div>
            </>}
            {!localStorage.getItem('token') && <>
                <Button label="Iniciar Sesión" onClick={()=>redireccionar('/log')} className="hidden sm:block p-button-text font-medium"/>
                <Button tooltip='Iniciar Sesión' tooltipOptions={{position:'left'}} onClick={()=>redireccionar('/log')} className="pi pi-sign-in text-xl block sm:hidden p-button-text font-medium"/>
            </>}
        </>
    }

  return (
    <div>
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    </div>
  )
}

export default TopMenu