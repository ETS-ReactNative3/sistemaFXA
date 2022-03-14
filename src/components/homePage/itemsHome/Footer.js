import React from 'react'
import { Divider } from 'primereact/divider';


const Footer = () => {
  return (
    <div id='Footer' className='card surface-card' style={{borderRadius:'0'}}>
      <footer className="grid">
          <div className="col-12 xl:col-4 grid">
            <div className='mb-2 ml-2 col-12 xl:col-12 md:col-6'><span className="mr-2"><i className='pi pi-map-marker'/> Calle 79B #29-33 Santa Sofia, Bogotá, Colombia</span></div>
            <div className='mb-2 ml-2 col-12 xl:col-12 md:col-5'><span className="mr-2"><i className='pi pi-phone'/> 2100049</span></div>
            <div className='mb-2 ml-2 col-12 xl:col-12 md:col-6'><i className='pi pi-envelope'/><span className="ml-2 font-medium inline-block"> Aux RRHH</span> Auxtalentohumano@fuxiaaccesorios.com</div>
            <div className='mb-2 ml-2 col-12 xl:col-12 md:col-5'><i className='pi pi-envelope'/><span className="ml-2 font-medium inline-block"> Coordinadora RRHH</span> Kmorales@fuxiaaccesorios.com</div>
          </div>

          <Divider className='col-1 xl:flex hidden' layout='vertical'/>
          <Divider className='xl:hidden block ' layout='horizontal'/>
          <div className="col-12 xl:col-3 md:col-6">
            <div className="grid text-center align-items-center justify-content-center h-full">
              <span className='col-4'><i className='pi pi-facebook text-3xl block mb-2 cursor-pointer' onClick={()=>window.open('https://www.facebook.com/FUXIA-accesorios-1330319523802596')}/>Facebook</span>  
              <span className='col-4'><i className='pi pi-instagram text-3xl block mb-2 cursor-pointer' onClick={()=>window.open('https://www.instagram.com/fxashop')}/>Instagram</span>  
              <span className='col-4'><i className='pi pi-shopping-bag text-3xl block mb-2 cursor-pointer' onClick={()=>window.open('https://www.fxa.com.co/')}/>Tienda</span>  
            </div>
          </div>
          <Divider className='col-1 xl:flex hidden' layout='vertical'/>
          <Divider className='md:hidden block ' layout='horizontal'/>
          <div className="col-12 xl:col-2 md:col-5">
            <div className="grid text-center align-items-center justify-content-center h-full">
              <span className='col-12 font-medium'><i className='pi pi-info-circle text-3xl block mb-2 cursor-pointer' onClick={()=>alert('Info trabaja')}/>Trabaja Con Nosotros</span>  
            </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer