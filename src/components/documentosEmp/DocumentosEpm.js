import React, { useEffect, useState } from 'react';
import { EmpleadoService } from '../../service/EmpleadoService';

import { Button } from 'primereact/button';
import CredencialService from '../../service/CredencialService';
import { useHistory } from 'react-router-dom';

export const DocumentosEmp = (params) => {

    const history = new useHistory()

    const [dataEmpleado, setDataEmpleado] = useState({});

    const [loading, setLoading] = useState(true);
    


    useEffect(() => {
        const credencialService = new CredencialService()
        const empleadoService = new EmpleadoService()

        credencialService.getDatatopbar().then(res=>{
            empleadoService.getDatosEmpDocs().then(resp=>{
                setDataEmpleado(resp.data)
                setLoading(false)
            })
        })
        
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
        {loading &&
            <div>cargando...</div>
        }
        {!loading &&
        <div className='grid card'>
            <div className="col-12 xl:col-9 lg:col-8 md:col-8 text-center">
                <h5>{dataEmpleado.nombres} {dataEmpleado.apellidos}</h5>
                <div className='w-full flex align-items-center justify-content-center block xl:hidden md:hidden lg:hidden'>
                    <img className='w-5' style={{maxWidth:'150px'}} src="https://images.vexels.com/media/users/3/153765/isolated/preview/c10b13f96511782d983e3a60940cc58a-como-iconos-sociales-de-icono-de-trazo-de-color.png" alt="" />
                </div>
                <div className="card">
                        
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
    </>
  )
};
