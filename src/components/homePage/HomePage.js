import React from 'react'
import Part1 from './itemsHome/Part1'
import Header from './itemsHome/Header'
import Part2 from './itemsHome/Part2'
import Part3 from './itemsHome/Part3'
import Footer from './itemsHome/Footer'
import Header2 from './itemsHome/Header2'

const HomePage = () => {

  return (<div style={{overflow:'hidden'}}>
    <Header2/>
    <Part1/>
    <Part2/>
    <Part3/>
    <Footer/>
  </div>)
}

export default HomePage