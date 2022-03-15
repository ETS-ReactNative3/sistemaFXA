import { Button } from 'primereact/button'
import React from 'react'
import { Link } from 'react-scroll/modules'

const ButtonScrollUp = () => {
  return (
    <div>
        <Link
        to="Part1"
        spy={true}
        smooth={'easeInOutCubic'}
        duration={2000}
        >
          <Button className='fixed bottom-0 text-200 z-5' style={{right:'4rem', background:'#000', border:'none', borderRadius:'5px 5px 0 0'}}><i className='pi pi-angle-up text-4xl'/></Button>
        </Link>
    </div>
  )
}

export default ButtonScrollUp