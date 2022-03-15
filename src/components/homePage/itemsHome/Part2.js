import { Button } from 'primereact/button'
import React from 'react'
import { Link } from 'react-scroll/modules'

import './Part2.css'

const Part2 = () => {    

  return (
        <div id='Part2' className="card relative" style={{borderRadius:'0', minHeight:'100vh'}}>
            <div className="grid sm:px-6 py-4 md:px-8 lg:px-10 mb-0 ">
                <div className="col-12 lg:col-4 mt-8">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column surface-card text-center" style={{ borderRadius: '10px' }}>
                            <i className='pi pi-check-circle text-600 font-medium text-3xl mb-2 text-purple-300'/>
                            <div className="text-900 font-medium text-3xl mb-2">Nosotros</div>
                            <div className="text-700 text-lg mb-2">Somos una marca Colombiana con 14 años de experiencia en moda de Bolsos y Accesorios para mujeres y niñas con más de 60 tiendas a nivel nacional.</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-4 mt-8">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column surface-card text-center" style={{ borderRadius: '10px' }}>
                            <i className='pi pi-check-circle text-600 font-medium text-3xl mb-2 text-purple-300'/>
                            <div className="text-900 font-medium text-3xl mb-2">Misión</div>
                            <div className="text-700 text-lg mb-2">Nuestra Misión es cautivar las emociones de nuestros Fans, con una puesta en escena colorida y con una variedad sin límites en productos que están a la vanguardia de las últimas tendencias.</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-4 mt-8">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column surface-card text-center" style={{ borderRadius: '10px' }}>
                            <i className='pi pi-check-circle text-600 font-medium text-3xl mb-2 text-purple-300'/>
                            <div className="text-900 font-medium text-3xl mb-2">Visión</div>
                            <div className="text-700 text-lg mb-2">Posicionar a FXA en Colombia, Latinoamérica, y todo el estado de Florida como la marca favorita de accesorios para mujeres y niñas.</div>
                        </div>
                    </div>
                </div>

                <div className="ocean hidden lg:block">
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            
            </div>
            <Link
            to="Part3"
            spy={true}
            smooth={'easeInCubic'}
            duration={800}
            >
                <Button className='hidden lg:block p-button-rounded p-button-outlined absolute bottom-0 mx-4 my-6 text-white-alpha-90'><i className='pi pi-angle-down text-4xl'/></Button>
            </Link>
        </div>
    
  )
}

export default Part2