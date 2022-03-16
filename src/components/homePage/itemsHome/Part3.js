import { Button } from 'primereact/button'
import React from 'react'
import { Link } from 'react-scroll/modules'

const Part3 = () => {
  return (
    <div className='relative w-full hscreen'>
      <div id='Part3' className="grid grid-nogutter surface-section text-800 mt-0">
          <div className="col-12 md:col-6 overflow-hidden">
              <img src="images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-screen" style={{ clipPath: 'circle(97% at 0 33%)', maxHeight:'100vw' }} />
          </div>
          <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
              <section>
                  <span className="block text-6xl font-bold mb-1">FXA by Fuxia</span>
                  <div className="text-6xl text-primary font-bold mb-3">Desde hace 15 años</div>
                  <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </section>
          </div>
          
      </div>
      <Link
      to="Footer"
      spy={true}
      smooth={'easeInCubic'}
      duration={800}
      >
        <Button className='hidden lg:block p-button-rounded p-button-outlined absolute bottom-0 mx-6 my-6 text-white-alpha-90'><i className='pi pi-angle-down text-4xl'/></Button>
      </Link>
    </div>
  )
}

export default Part3