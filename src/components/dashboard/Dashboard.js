import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { EmpleadoService } from '../../service/EmpleadoService';
import { useHistory } from 'react-router-dom';

require('./dashboard.css')

export const Dashboard = (props) => {

    const history = useHistory();

    const [empleadosNuevos, setEmpleadosNuevos] = useState(null);
    const [porcentajeEmpleados, setPorcentajeEmpleados] = useState([{},{},{},{},{},{},{},{}]);
    const [datosCards, setDatosCards] = useState({
        card1:{
            usuarios:"",
            soporte:"",
            admin:""
        },
        card2:[{},{},{}]
    });

    useEffect(() => {
        const empleadoService = new EmpleadoService()
        empleadoService.getEmpleadosDash().then(items=> {
            setEmpleadosNuevos(items.data) 
        })
        empleadoService.getDatosCardsDash().then(items=>{
            setDatosCards(items.data)
        })
        empleadoService.getPorcentajeEmpleado().then(items=>{
            setPorcentajeEmpleados(items.data)
        })
    }, []);

    const handleRedireccionUsu = () =>{
        history.push('/dash/usuarios')
    }

    return (
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-5">
                <div className="card mb-0">
                    <span className="block text-xl font-medium mb-3">Bienvenido "nombre"</span>
                    <div className="text-600 font-medium mb-3">Para ver tus datos personales ve a la sección de perfil.</div>
                    <Button label="Ver Perfil" className="p-button-link text-pink-300 font-medium"></Button>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-7">
                <div className="card mb-0">
                    <span className="block text-xl font-medium mb-2">RRHH</span>
                    <div className="text-600 font-medium mb-2">Acceso rapido a los modulos del sistema</div>
                    <Button label='Usuarios' onClick={()=>history.push('/dash/usuarios')} icon="pi pi-users" className="p-button-text text-pink-400 mr-2 mb-2"></Button>
                    <Button label='Permisos' onClick={()=>history.push('/dash/permisos')} icon="pi pi-user-edit" className="p-button-text text-pink-400 mr-2 mb-2"></Button>
                    <Button label='Perfil' onClick={()=>history.push('/dash/perfil')} icon="pi pi-pencil" className="p-button-text text-pink-400 mr-2 mb-2"></Button>
                    <Button label='Documentos' onClick={()=>history.push('/dash/documentos')} icon="pi pi-folder" className="p-button-text text-pink-400 mr-2 mb-2"></Button>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0 cardHover" onClick={handleRedireccionUsu}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Usuarios</span>
                            <div className="text-900 font-medium text-xl">{datosCards.card1.usuarios}</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{width: '2.5rem', height: '2.5rem'}}>
                            <i className="pi pi-user text-blue-500 text-xl"/>
                        </div>
                    </div>
                    <span className="text-pink-400 font-medium">{datosCards.card1.soporte} soporte sistema </span>
                    <div className="text-900 font-medium mt-2">{datosCards.card1.admin} admin sistema</div>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0 cardHover" onClick={handleRedireccionUsu}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">{datosCards.card2[0].nombre_ciudad}</span>
                            <div className="text-900 font-medium text-xl">{datosCards.card2[0].total_empleados_ciudad} Empleados</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{width: '2.5rem', height: '2.5rem'}}>
                            <i className="pi  text-orange-500 text-xl">1°</i>
                        </div>
                    </div>
                    <span className="text-pink-400 font-medium">{datosCards.card2[0].nombre_centro_costo}</span>
                    <div className="text-900 font-medium mt-2">{datosCards.card2[0].total_empleados} Empleados</div>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0 cardHover" onClick={handleRedireccionUsu}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">{datosCards.card2[1].nombre_ciudad}</span>
                            <div className="text-900 font-medium text-xl">{datosCards.card2[1].total_empleados_ciudad} Empleados</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{width: '2.5rem', height: '2.5rem'}}>
                            <i className="pi text-cyan-500 text-xl">2°</i>
                        </div>
                    </div>
                    <span className="text-pink-400 font-medium">{datosCards.card2[1].nombre_centro_costo}</span>
                    <div className="text-900 font-medium mt-2">{datosCards.card2[1].total_empleados} Empleados</div>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0 cardHover" onClick={handleRedireccionUsu}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">{datosCards.card2[2].nombre_ciudad}</span>
                            <div className="text-900 font-medium text-xl">{datosCards.card2[2].total_empleados_ciudad} Empleados</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{width: '2.5rem', height: '2.5rem'}}>
                            <i className="pi text-purple-500 text-xl">3°</i>
                        </div>
                    </div>
                    <span className="text-pink-400 font-medium">{datosCards.card2[2].nombre_centro_costo}</span>
                    <div className="text-900 font-medium mt-2">{datosCards.card2[2].total_empleados} Empleados</div>
                </div>
            </div>

            <div className="col-12 xl:col-7">
                <div className="card">
                    <div className='flex justify-content-between alinig-items-center mb-5'>
                        <h5>Nuevos Empleados:</h5>
                        <Button label="Ver Todos" className="p-button-outlined" />
                    </div>
               
                    <DataTable value={empleadosNuevos} rows={5} paginator responsiveLayout="scroll">
                        <Column field="nombres" header="Nombre" sortable/>
                        <Column field="empresa.nombre_empresa" header="Empresa" sortable style={{width: '100%'}}/>
                        <Column field="centro_costo.nombre_centro_costo" header="Tienda" sortable  />
                        <Column field="fecha_ingreso" header="Ingreso" sortable  />
                        
                    </DataTable>
                </div>
                
            </div>

            <div className="col-12 xl:col-5">
            <div className="card">
                    <h5 className='mb-5'>Porcentaje De Empleados Por Empresa</h5>
                        
                    <ul className="list-none p-0 m-0">
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">{porcentajeEmpleados[0].nombre_empresa}</span>
                                <div className="mt-1 text-600">{porcentajeEmpleados[0].total_empleados} empleados</div>
                            </div>
                            <div className="mt-2 md:mt-0 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{height: '8px'}}>
                                    <div className="bg-orange-500 h-full" style={{width: `${porcentajeEmpleados[0].porcentaje}%`}}/>
                                </div>
                                <span className="text-orange-500 ml-3 font-medium">%{Math.trunc(porcentajeEmpleados[0].porcentaje)}</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">{porcentajeEmpleados[1].nombre_empresa}</span>
                                <div className="mt-1 text-600">{porcentajeEmpleados[1].total_empleados} empleados</div>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{height: '8px'}}>
                                    <div className="bg-cyan-500 h-full" style={{width: `${porcentajeEmpleados[1].porcentaje}%`}}/>
                                </div>
                                <span className="text-cyan-500 ml-3 font-medium">%{Math.trunc(porcentajeEmpleados[1].porcentaje)}</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">{porcentajeEmpleados[2].nombre_empresa}</span>
                                <div className="mt-1 text-600">{porcentajeEmpleados[2].total_empleados} empleados</div>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{height: '8px'}}>
                                    <div className="bg-pink-500 h-full" style={{width: `${porcentajeEmpleados[2].porcentaje}%`}}/>
                                </div>
                                <span className="text-pink-500 ml-3 font-medium">%{Math.trunc(porcentajeEmpleados[2].porcentaje)}</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">{porcentajeEmpleados[3].nombre_empresa}</span>
                                <div className="mt-1 text-600">{porcentajeEmpleados[3].total_empleados} empleados</div>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{height: '8px'}}>
                                    <div className="bg-green-500 h-full" style={{width: `${porcentajeEmpleados[3].porcentaje}%`}}/>
                                </div>
                                <span className="text-pink-400 ml-3 font-medium">%{Math.trunc(porcentajeEmpleados[3].porcentaje)}</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">{porcentajeEmpleados[4].nombre_empresa}</span>
                                <div className="mt-1 text-600">{porcentajeEmpleados[4].total_empleados} empleados</div>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{height: '8px'}}>
                                    <div className="bg-purple-500 h-full" style={{width: `${porcentajeEmpleados[4].porcentaje}%`}}/>
                                </div>
                                <span className="text-purple-500 ml-3 font-medium">%{Math.trunc(porcentajeEmpleados[4].porcentaje)}</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">{porcentajeEmpleados[5].nombre_empresa}</span>
                                <div className="mt-1 text-600">{porcentajeEmpleados[5].total_empleados} empleados</div>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{height: '8px'}}>
                                    <div className="bg-teal-500 h-full" style={{width: `${porcentajeEmpleados[5].porcentaje}%`}}/>
                                </div>
                                <span className="text-teal-500 ml-3 font-medium">%{Math.trunc(porcentajeEmpleados[5].porcentaje)}</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-sm mr-2 mb-1 md:mb-0">{porcentajeEmpleados[6].nombre_empresa}</span>
                                <div className="mt-1 text-600">{porcentajeEmpleados[6].total_empleados} empleados</div>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{height: '8px'}}>
                                    <div className="bg-bluegray-500 h-full" style={{width: `${porcentajeEmpleados[6].porcentaje}%`}}/>
                                </div>
                                <span className="text-bluegray-500 ml-3 font-medium">%{Math.trunc(porcentajeEmpleados[6].porcentaje)}</span>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    );
}
