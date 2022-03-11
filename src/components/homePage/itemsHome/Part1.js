import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import CredencialService from '../../../service/CredencialService'

const Part1 = () => {

  const history = new useHistory()

  const [ link, setLink] = useState('/log')
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      const credencialService = new CredencialService()
      credencialService.getDatatopbar().then(res=>{
          if(res.data.Rol==="Soporte" || res.data.Rol==="Admin" )
          setLink('/dash')
          else
          setLink('/dash/perfil')
      }) 
    }
}, []) //eslint-disable-line

  const img = require('../../../assets/images/home/Mobile.png')
  const img1 = require('../../../assets/images/home/Desktop.png')
  return (
    <div className="h-screen w-full relative cursor-pointer" onClick={()=>history.push(link)}>
        <img src={img1} alt="" className='absolute h-screen w-full hidden md:block'/>
        <img src={img} alt="" className='absolute h-screen w-full block md:hidden'/>
    </div>
  )
}

export default Part1