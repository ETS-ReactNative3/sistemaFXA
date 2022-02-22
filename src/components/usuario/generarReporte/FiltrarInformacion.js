import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

const FiltrarInformacion = (params) => {

    const dataDropDown = [
        {label:'Tipo Identificación',code:1,serviceName:'tipo-identificacion',optionsName:'tipo_identificacion'},
        {label:'Lugar Nacimiento',code:1,serviceName:'ciudad',optionsName:'ciudad',foranea:'lugar_nacimiento'}
    ]
    
    const [campoSeleccionado, setCampoSeleccionado] = useState(null);
    const [itemSeleccionado, setItemSeleccionado] = useState(null);
    const [dataOption, setDataOption] = useState([])

    const [infoItem , setInfoItem] = useState('')

    const onCampoChange = (e) => {
        let value = e.value
        setCampoSeleccionado(value);
        //
        const ItemService  = require(`../../../service/DefaultService`);
        const itemService = ItemService.default(value.serviceName)
        setInfoItem(value.optionsName)
        const service = new itemService()
        service.getAll().then(res=>{
            setItemSeleccionado(null)
            setDataOption(res.data)
        })
    }

    const onItemChange = (e) =>{
        let value = e.value
        setItemSeleccionado(value);
    }

    const SaveOption = () =>{
        params.setCondiciones([...params.condiciones,...[{campo:campoSeleccionado.foranea?campoSeleccionado.foranea:campoSeleccionado.optionsName, valor:itemSeleccionado}]])
    }

  return (
    <div className="card">
        <div className='grid'>
            <div className="col-12 md:col-1">
                <Button icon="pi pi-plus" onClick={SaveOption} className="mb-2"></Button>
            </div>
            <div className="col-12 md:col-4">
                <span className="p-float-label">
                <Dropdown value={campoSeleccionado} className='w-full' options={dataDropDown} onChange={onCampoChange} optionLabel="label" filter filterBy={'label'}/>
                    <label>Campo:</label>
                </span>
            </div>
            <div className="col-12 md:col-2 text-center">
                <span className='text-base'>Contiene</span>
            </div>
            <div className="col-12 md:col-4">
                <span className="p-float-label">
                    <Dropdown className='w-full' value={itemSeleccionado} options={dataOption} onChange={onItemChange} optionLabel={'nombre_'+infoItem} optionValue={'id_'+infoItem} filter filterBy={'nombre_'+infoItem}
                    emptyMessage="No se encontraron resultados" emptyFilterMessage="No se encontraron resultados" />
                    <label>Contenido:</label>
                </span>
            </div>
        </div>
        {
            params.condiciones.map((el,id)=>{
                return <div className='grid' key={id}>
                <div className="col-12 md:col-1">
                    <Button icon="pi pi-minus" onClick={console.log("borrar jaja")} className="mb-2"></Button>
                </div>
            </div>
            })
        }
    </div>
  )
}

export default FiltrarInformacion