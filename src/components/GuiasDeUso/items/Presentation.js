import { Divider } from 'primereact/divider'
import React from 'react'
import { Link } from 'react-router-dom'


const Presentation = () => {
  return (
    <div>
        <div className="grid w-full h-full justify-content-center">
            <div className="card col-12 my-4">
                <h4 className='mx-4'>Documentación SIGE:</h4>
                <p className='text-600 font-medium mt-2 text-justify w-full mx-4'>En el siguiente apartado se encuentra la documentacion de uso de la página para cada rol disponible, desde los manuales de uso hasta videos explicativos de como funciona nuestro sistema de información SIGE</p>
            </div>
            <Divider align="left">
                <div className="inline-flex align-items-center">
                    <p className='text-600 font-medium text-xl'>Guías De Uso</p>
                </div>
            </Divider>
            <div className="col-12 lg:col-4">
                <div className="p-3 h-full">
                    <Link to='/guia-uso/manual-empleado'>
                        <div className="card mb-0 cardHover">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-800 font-medium mb-3">Manual Usuario P1</span>
                                    <div className="text-900 font-medium text-xl">Rol Empleado</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{width: '2.5rem', height: '2.5rem'}}>
                                    <i className="pi pi-user text-blue-500 text-xl"/>
                                </div>
                            </div>
                            <div className="text-400 font-medium mt-2">Manual basico del uso y funcionamiento del sistema de informción SIGE.</div>
                            <div className="text-400 font-medium mt-2">Se abarcan temas de uso exclusivo de rol empleado, pero es necesario para entender los siguientes manuales.</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-12 lg:col-4">
                <div className="p-3 h-full">
                    <Link to='/guia-uso/manual-admin'>
                        <div className="card mb-0 cardHover">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-800 font-medium mb-3">Manual Usuario P2</span>
                                    <div className="text-900 font-medium text-xl">Rol Admin</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{width: '2.5rem', height: '2.5rem'}}>
                                    <i className="pi pi-briefcase text-purple-500 text-xl"/>
                                </div>
                            </div>
                            <div className="text-400 font-medium mt-2">Manual de uso de procesos fundamentales del sistema SIGE</div>
                            <div className="text-400 font-medium mt-2">Se abarcan temas de uso exclusivo de rol admin, no es necesario para comprender el siguiente manual pero es recomendado.</div>
                        </div>
                    </Link>
                </div>
            </div> 
            <div className="col-12 lg:col-4">
                <div className="p-3 h-full">
                    <Link to='/guia-uso/manual-soporte'>
                        <div className="card mb-0 cardHover">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-800 font-medium mb-3">Manual Usuario P3</span>
                                    <div className="text-900 font-medium text-xl">Rol Soporte</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-yellow-100 border-round" style={{width: '2.5rem', height: '2.5rem'}}>
                                    <i className="pi pi-star text-yellow-500 text-xl"/>
                                </div>
                            </div>
                            <div className="text-400 font-medium mt-2">Manual de uso de procesos de permisos elevados del sistema SIGE</div>
                            <div className="text-400 font-medium mt-4">Se abarcan temas de uso exclusivo de rol soporte.</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Presentation