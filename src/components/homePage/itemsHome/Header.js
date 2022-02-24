import React from 'react'
import { useHistory } from 'react-router-dom'

const Header = () => {
    
    const history = new useHistory()

  return (
    <div className='fixed w-full h-4rem' style={{background:''}}>
        <div className="col-4">Logo</div>
        <div className="col-6">menu</div>
        <div className="col-2" onClick={()=>history.push('/log')}>Iniciar Sesion</div>
    </div>
  )
}

export default Header