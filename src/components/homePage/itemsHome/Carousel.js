import React, { useEffect, useState } from 'react'
import { Galleria } from 'primereact/galleria';

const Carousel = () => {

    const [images, setImages] = useState()    

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];


    useEffect(()=>{
        setImages([{src:'data:image/jpeg;base64,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'}])
    },[])

    const itemTemplate =(item) =>{
        return <img src={item.src} alt={item.alt} style={{ width:'100%',display: 'block' , height:'400px' }} />;
    }

  return (
    <div className="card">
        <h5>Home Page FXA</h5>
        {/* <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px'}}
            showThumbnails={false} showIndicators showIndicatorsOnItem item={itemTemplate} /> */}
    </div>
  )
}

export default Carousel