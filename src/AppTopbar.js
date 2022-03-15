import React, { useEffect, useRef, useState }  from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Menu } from 'primereact/menu';
import { useHistory } from 'react-router-dom';
import CredencialService from './service/CredencialService';
import './DashTopbar.css'
import { Dialog } from 'primereact/dialog';
import Cuenta from './components/cuenta/Cuenta';
import { Toast } from 'primereact/toast';
export const AppTopbar = (props) => {

    const toast = useRef(null);

    const history = new useHistory()

    const logo = require('./assets/images/logo-fxa-version-principal.svg')
    
    const [infoTopBar, setInfoTopBar] = useState({})

    useEffect(() => {
        const credencialService = new CredencialService()

        credencialService.getDatatopbar().then(res=>{
            setInfoTopBar(res.data)
        }) 

    }, [])

    const menu = useRef(null);

    const toggleMenu = (event) => {
        menu.current.toggle(event);
    };

    const redireccionar = (ruta) =>{
        history.push(ruta)
    }

    const cerrarSesion = () =>{
        localStorage.removeItem('token')
        history.push("/log")
    }

    const overlayMenuItems = [

        {

            label: infoTopBar.nombre,

            items:[
                
            {
                label:'Inicio',
                icon: 'pi pi-home',
                command:()=>redireccionar('/')
            },
            {
                label:"Seguridad",
                icon: 'pi pi-sync',
                command:()=>setDialogCuenta(true)
            },
            {
                label:"Perfil",
                icon: 'pi pi-cog',
                command:()=>redireccionar('/dash/perfil')
            }
        ]
        },

        {
            separator: true
        },
        {
            label: 'Cerrar Sesion',
            icon: 'pi pi-sign-out',
            command: cerrarSesion
        }
    ];


    const [ dialogCuenta, setDialogCuenta] = useState(false)

    const hideModal = () =>{
        setDialogCuenta(false)
    }


    return (
        <div className="layout-topbar">
            <Toast ref={toast} position="bottom-right"/>

            <Link to="/" className="layout-topbar-logo">
                <img src={logo} alt="logo"/>
                <small className='mx-4'>Recursos Humanos (SIGE)</small>
            </Link>

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>

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

            <Dialog header={<h4 className='text-center'>Cambio de contraseña</h4>} draggable={false} position='center' blockScroll={true} visible={dialogCuenta} style={{ width: '25vw' }} breakpoints={{'1150px': '30vw', '960px': '35vw', '640px': '100vw'}} onHide={hideModal}>
                <Cuenta hideModal={hideModal} toast={toast}/>
            </Dialog>
        </div>
    );
}
