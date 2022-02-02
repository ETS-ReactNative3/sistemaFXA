import { Checkbox } from 'primereact/checkbox';
import React, { useState } from 'react';

const GenerarReporte = () => {

    const [datosExcel, setDatosExcel] = useState({})

    const exportExcel = () => {
        import('xlsx').then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(datosExcel);
            const workbook = { Sheets: { 'DataFXA': worksheet }, SheetNames: ['DataFXA'] };
            const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            saveAsExcelFile(excelBuffer, 'ReporteFXA');
        });
    }

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }

    const [checkboxValue, setCheckboxValue] = useState([]);


    const onCheckboxChange = (e) => {
        let selectedValue = [...checkboxValue];
        if (e.checked)
            selectedValue.push(e.value);
        else
            selectedValue.splice(selectedValue.indexOf(e.value), 1);

        setCheckboxValue(selectedValue);
    };

    const values = [
        {value:'nombres', label:'Nombres'},
        {value:'apellidos', label:'Apellidos'},
        {value:'tipo_identificacion', label:'Tipo Identificacion'},
        {value:'numero_identificacion', label:'Numero Identificacion'},
        {value:'genero', label:'Genero'},
        {value:'fecha_nacimiento', label:'Fecha Nacimiento'},
        {value:'lugar_nacimiento', label:'Lugar Nacimiento'},
        {value:'nacionalidad', label:'Nacionalidad'},
        {value:'estado_civil', label:'Estado Civil'},
        {value:'correo_electronico', label:'Correo Electronico'},
        {value:'celular', label:'Celular'},
        {value:'telefono_fijo', label:'Telefono Fijo'},
        {value:'empresa', label:'Empresa'},
        {value:'lugar_trabajo', label:'Lugar Trabajo'},
        {value:'centro_costo', label:'Centro Costo'},
        {value:'cargo', label:'Cargo'},
        {value:'tipo_contrato', label:'Tipo Contrato'},
        {value:'tiempo', label:'Tiempo'},
        {value:'fecha_ingreso', label:'Fecha Ingreso'},
        {value:'estado_contrato', label:'Estado Contrato'},
        {value:'jefe_zona', label:'Jefe Zona'},
        {value:'salario', label:'Salario'},
        {value:'aux_movilidad', label:'Aux Movilidad'},
        {value:'banco', label:'Banco'},
        {value:'tipo_cuenta', label:'Tipo_Cuenta'},
        {value:'num_cuenta', label:'Num Cuenta'},
        {value:'riesgo', label:'Riesgo'},
        {value:'estudios_realizados', label:'Estudios Realizados'},
        {value:'talla_camisa', label:'Talla Camisa'},
        {value:'talla_pantalon', label:'Talla Pantalon'},
        {value:'talla_calzado', label:'Talla Calzado'},
        {value:'eps', label:'Eps'},
        {value:'arl', label:'Arl'},
        {value:'pension', label:'Pension'},
        {value:'cesantias', label:'Cesantias'},
        {value:'caja_compensacion', label:'Caja_compensacion'},
        {value:'direccion', label:'Direccion'},
        {value:'fecha_expedicion_doc', label:'Fecha Expedicion Doc'},
        {value:'lugar_exp_doc', label:'Lugar Exp Doc'},
        {value:'contacto_emergencia', label:'Contacto Emergencia'},
        {value:'tel_contacto_emergencia', label:'Tel Contacto Emergencia'},
    ]

  return <div>
        <h6>Seleccione Los campos para exportar</h6>
                    <div className="grid">
                        {
                            values.map((el,id)=>{
                                return(
                                <div className="col-12 md:col-4">
                                    <div className="field-checkbox">
                                        <Checkbox inputId={"checkOption"+id} name="option" value={el.value} checked={checkboxValue.indexOf(el.value) !== -1} onChange={onCheckboxChange} />
                                        <label htmlFor={"checkOption"+id}>{el.label}</label>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
    </div>;
};

export default GenerarReporte;
