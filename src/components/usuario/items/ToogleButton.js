import React, { useEffect, useState } from 'react';
import { SelectButton } from 'primereact/selectbutton';


export const ToogleButton = (params) => {

    const [itemSeleccionado, setItemSeleccionado] = useState(params.id);

    const items = [
        {optionLabel: 'Masculino', value: false},
        {optionLabel: 'Femenino', value: true},
    ]

    useEffect(()=>{
      setItemSeleccionado(params.id)
    }, [params.id])
    
    const onChange = (e) => {
        setItemSeleccionado(e.value);
        params.onChange(e)
    }

  return (
    <SelectButton unselectable={false} id={params.name} value={itemSeleccionado} options={items} onChange={onChange} optionLabel='optionLabel'/>

  );

};

 
