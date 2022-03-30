import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ManualAdmin from './items/ManualAdmin'
import ManualEmpleado from './items/ManualEmpleado'
import ManualSoporte from './items/ManualSoporte'
import Presentation from './items/Presentation'
import TopMenu from './items/TopMenu'

const HomeGuia = () => {
  return (
    <>
        <TopMenu/>
        <Switch>
            <Route exact path="/guia-uso">
                <Presentation/>
            </Route>
            <Route exact path="/guia-uso/manual-empleado">
                <ManualEmpleado/>
            </Route> 
            <Route exact path="/guia-uso/manual-admin">
                <ManualAdmin/>
            </Route> 
            <Route exact path="/guia-uso/manual-soporte">
                <ManualSoporte/>  
            </Route> 
        </Switch>
    </>
  )
}

export default HomeGuia