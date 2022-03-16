import { Toast } from 'primereact/toast'
import React,{ useRef } from 'react'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Login from './Login';
import SendEmailPass from './SendEmailPass';

const Log = () => {
    const toast = useRef(null);
    const history = useHistory();

  return (
    <div className="flex align-items-center justify-content-center" style={{width: "100%", height: "100%", position: 'fixed'}}>
        <Toast ref={toast} position="bottom-right"/>

        <i onClick={()=>history.push('/')} className='pi pi-home text-3xl absolute top-0 left-0 mt-4 ml-4 cursor-pointer'/>

        <Switch>
            <Route exact path='/log'>
                <Login toast={toast}/>
            </Route>
            <Route exact path='/log/recover-pass'>
                <SendEmailPass toast={toast}/>
            </Route>
        </Switch>
    
    </div>

  )
}

export default Log