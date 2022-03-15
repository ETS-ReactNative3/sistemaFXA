import { Button } from 'primereact/button'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-scroll/modules'
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
    <div id='Part1' className="h-screen w-full relative cursor-pointer">
        <img src={img1} onClick={()=>history.push(link)} alt="" className='absolute h-screen w-full hidden md:block'/>
        <img src={img} onClick={()=>history.push(link)} alt="" className='absolute h-screen w-full block md:hidden'/>

        <Link
        to="Part2"
        spy={true}
        smooth={'easeInCubic'}
        duration={800}
        >
          <Button className='hidden lg:block p-button-rounded p-button-outlined absolute bottom-0 mx-6 my-6 text-white-alpha-90'><i className='pi pi-angle-down text-4xl'/></Button>
        </Link>

    </div>
  )
}

export default Part1