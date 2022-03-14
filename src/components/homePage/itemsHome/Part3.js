import React from 'react'

const Part3 = () => {
  return (
    <div id='Part3' className="grid grid-nogutter surface-section text-800 mt-0">
        <div className="col-12 md:col-6 overflow-hidden">
            <img src="images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'circle(97% at 0 33%)' }} />
        </div>
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
                <span className="block text-6xl font-bold mb-1">FXA by Fuxia</span>
                <div className="text-6xl text-primary font-bold mb-3">Desde hace 15 años</div>
                <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
        </div>
    </div>
  )
}

export default Part3