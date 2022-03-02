import React, { useEffect, useRef, useState }  from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Menu } from 'primereact/menu';
import { useHistory } from 'react-router-dom';
import CredencialService from './service/CredencialService';
import './DashTopbar.css'
import { BreadCrumb } from 'primereact/breadcrumb';
export const AppTopbar = (props) => {
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
                label:"Cuenta",
                icon: 'pi pi-tag',
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

    const [ itemsBreadMenu, setItemsBreadMenu] = useState([])

    useEffect(()=>{
        let itemsBread = []
        let items = window.location.hash.split('/')
        let url = '/#'
        items.forEach((el,id)=>{
            if(id>0 && (infoTopBar.Rol==='Soporte'||infoTopBar.Rol==='Admin')){
                url += `/${el}`
                itemsBread.push({label:el,url:url})
            }else if(id>1 && infoTopBar.Rol==='Empleado'){
                url += `/dash/${el}`
                itemsBread.push({label:el,url:url})
            }
        })
        setItemsBreadMenu(itemsBread)
    },[window.location.hash, infoTopBar]) //eslint-disable-line

    const homeBreadMenu = { icon: 'pi pi-home', url: '/#/' }

    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                <img src={logo} alt="logo"/>
                <small className='mx-4'>Recursos Humanos</small>
            </Link>

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={toggleMenu}>
                <i className="pi pi-user" />
            </button>

            <BreadCrumb model={itemsBreadMenu} home={homeBreadMenu} style={{background:'transparent', border:'none'}}/>

            <div className={classNames("layout-topbar-menu lg:flex origin-top")}>

                    <Menu className="mt-1" ref={menu} model={overlayMenuItems} popup />

                    <button className="p-link perfil" onClick={toggleMenu}>
                        <i className="pi pi-user px-2"/>
                        <span className="pl-2 pr-3">{infoTopBar.nombre}</span>
                    </button>

            </div>
        </div>
    );
}
