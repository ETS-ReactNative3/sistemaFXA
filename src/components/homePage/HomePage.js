import React, { useEffect } from 'react'
import Part1 from './itemsHome/Part1'
import Part2 from './itemsHome/Part2'
import Part3 from './itemsHome/Part3'
import Footer from './itemsHome/Footer'
import Header2 from './itemsHome/Header2'
import ButtonScrollUp from './itemsHome/ButtonScrollUp'

const HomePage = () => {

  useEffect(()=>{
    document.body.style.overflow = 'hidden'
  },[])

  return (<div>
    <Header2/>
    <Part1/>
    <Part2/>
    <Part3/>
    <ButtonScrollUp/>
    <Footer/>
  </div>)
}

export default HomePage