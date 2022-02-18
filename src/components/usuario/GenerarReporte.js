import { Checkbox } from 'primereact/checkbox';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';
import React, { useState } from 'react';
import { EmpleadoService } from '../../service/EmpleadoService';

const GenerarReporte = () => {

    const serviceEmpleado = new EmpleadoService()

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
    const [switchValue, setSwitchValue] = useState(true);

    const consultarDatos = () =>{
        let campos = []
        let foraneas = []
        if(!checkboxValue[0]){
            console.log("Seleccione Un Valor")
        }
        checkboxValue.forEach(el => {
            let data = el.split("-")
            switch (data[1]) {
                case 0:
                    campos.push(data[0])
                    break;

                case 1:
                    foraneas.push(data[0])
                    break;
            
                default:
                    break;
            }
        });
        serviceEmpleado.genReporte({campos,foraneas}).then(res=>{
            console.log(res.data)
        })
    }

    const [dataCampos, setDataCampos] = useState([])
    const [dataForaneas, setDataForaneas] = useState([])

    const onCheckboxChange = (e) => {
        let selectedValue = [...checkboxValue];
        if (e.checked){
            selectedValue.push(e.value);
        }else{
            selectedValue.splice(selectedValue.indexOf(e.value), 1);
        }
        let campos = []
        let foraneas = []
        selectedValue.forEach(el => {
            let data = el.split("-")
            switch (data[1]) {
                case 0:
                    campos.push(data[0])
                    break;

                case 1:
                    foraneas.push(data[0])
                    break;
            
                default:
                    break;
            }
        });
        setDataCampos(campos)
        setDataForaneas(foraneas)
        console.log(dataCampos)
        setCheckboxValue(selectedValue);
    };

    const onCheckboxChangeGrup = (e,options) =>{
        let selectedValue = [...checkboxValue];
        if (e.checked){
            options.forEach(el => {
                if(selectedValue.indexOf(el)===-1)
                    selectedValue.push(el);
            });
        }
        else{
            options.forEach(el => {
                selectedValue.splice(selectedValue.indexOf(el), 1);
            });
        }
        setCheckboxValue(selectedValue);
    }

    const valuesDatosBasicos = [
        {value:'nombres-0', label:'Nombres', tipo:'campo'},
        {value:'apellidos-0', label:'Apellidos', tipo:'campo'},
        {value:'tipo_identificacion-1', label:'Tipo Identificacion', tipo:'foranea'},
        {value:'numero_identificacion-0', label:'Numero Identificacion'},
        {value:'genero-0', label:'Genero'},
        {value:'fecha_nacimiento-0', label:'Fecha Nacimiento'},
        {value:'lugar_nacimiento-0', label:'Lugar Nacimiento'},
        {value:'nacionalidad-1', label:'Nacionalidad'},
        {value:'estado_civil-1', label:'Estado Civil'},
        {value:'correo_electronico-0', label:'Correo Electronico'},
        {value:'celular-0', label:'Celular'},
        {value:'telefono_fijo-0', label:'Telefono Fijo'},
    ]

    const valuesEmpresa = [
        {value:'empresa', label:'Empresa'},
        {value:'lugar_trabajo', label:'Lugar Trabajo'},
        {value:'centro_costo', label:'Centro Costo'},
        {value:'cargo', label:'Cargo'},
        {value:'tipo_contrato', label:'Tipo Contrato'},
        {value:'tiempo', label:'Tiempo'},
        {value:'fecha_ingreso', label:'Fecha Ingreso'},
        {value:'estado_contrato', label:'Estado Contrato'},
        {value:'jefe_zona', label:'Jefe Zona'},
    ]

    const valuesComplementarios = [
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
    ]

    const valuesAfiliaciones = [
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

  return <div className='h-30rem'>

        
        <h5>Exportar todo</h5>
        <InputSwitch checked={switchValue} className="block mb-4" onChange={(e) => setSwitchValue(e.value)} />
        {!switchValue &&
            <>
                <h5>Seleccione Los campos para exportar</h5>

                <Divider align="left">
                    <div className="inline-flex align-items-center">
                        <b>Datos Basicos</b>
                        <Checkbox className='mx-3' inputId="DatosBasicosCheck" name="option"  value={"datosBasicosCheck"} checked={checkboxValue.indexOf("datosBasicosCheck") !== -1} onChange={(e) => onCheckboxChangeGrup(e,['datosBasicosCheck','nombres-0','apellidos-0','tipo_identificacion-1','numero_identificacion-0','genero-0','fecha_nacimiento-0','lugar_nacimiento-0','nacionalidad-1','estado_civil-1','correo_electronico-0','celular-0','telefono_fijo-0'])} />
                    </div>
                </Divider>
                    
                    <div className="grid">
                        {
                            valuesDatosBasicos.map((el,id)=>{
                                return(
                                <div key={id} className="col-12 md:col-4">
                                    <div className="field-checkbox">
                                        <Checkbox inputId={"checkOption"+id} name="option" value={el.value} checked={checkboxValue.indexOf(el.value) !== -1 } onChange={onCheckboxChange} />
                                        <label htmlFor={"checkOption"+id}>{el.label}</label>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                <Divider align="left">
                    <div className="inline-flex align-items-center">
                        <b>Empresa</b>
                        <Checkbox className='mx-3' inputId="EmpresaCheck" name="option"  value={"EmpresaCheck"} checked={checkboxValue.indexOf("empresaCheck") !== -1} onChange={(e)=>onCheckboxChangeGrup(e,['empresaCheck','empresa','lugar_trabajo','centro_costo','cargo','tipo_contrato','tiempo','fecha_ingreso','estado_contrato','jefe_zona'])} />
                    </div>
                </Divider>
                    
                    <div className="grid">
                        {
                            valuesEmpresa.map((el,id)=>{
                                return(
                                <div key={id} className="col-12 md:col-4">
                                    <div className="field-checkbox">
                                        <Checkbox inputId={"checkOption"+id} name="option" value={el.value} checked={checkboxValue.indexOf(el.value) !== -1} onChange={onCheckboxChange} />
                                        <label htmlFor={"checkOption"+id}>{el.label}</label>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                <Divider align="left">
                    <div className="inline-flex align-items-center">
                        <b>Complementarios</b>
                        <Checkbox className='mx-3' inputId="ComplementariosCheck" name="option"  value={"ComplementariosCheck"} checked={checkboxValue.indexOf("complementariosCheck") !== -1} onChange={(e)=>onCheckboxChangeGrup(e,['complementariosCheck','salario','aux_movilidad','banco','tipo_cuenta','num_cuenta','riesgo','estudios_realizados','talla_camisa','talla_pantalon','talla_calzado'])} />
                    </div>
                </Divider>
                    
                    <div className="grid">
                        {
                            valuesComplementarios.map((el,id)=>{
                                return(
                                <div key={id} className="col-12 md:col-4">
                                    <div className="field-checkbox">
                                        <Checkbox inputId={"checkOption"+id} name="option" value={el.value} checked={checkboxValue.indexOf(el.value) !== -1} onChange={onCheckboxChange} />
                                        <label htmlFor={"checkOption"+id}>{el.label}</label>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                <Divider align="left">
                    <div className="inline-flex align-items-center">
                        <b>Afiliaciones</b>
                        <Checkbox className='mx-3' inputId="AfiliacionesCheck" name="option"  value={"AfiliacionesCheck"} checked={checkboxValue.indexOf("afiliacionesCheck") !== -1} onChange={(e)=>onCheckboxChangeGrup(e,['afiliacionesCheck','eps','arl','pension','cesantias','caja_compensacion','direccion','fecha_expedicion_doc','lugar_exp_doc','contacto_emergencia','tel_contacto_emergencia'])} />
                    </div>
                </Divider>
                    
                    <div className="grid">
                        {
                            valuesAfiliaciones.map((el,id)=>{
                                return(
                                <div key={id} className="col-12 md:col-4">
                                    <div className="field-checkbox">
                                        <Checkbox inputId={"checkOption"+id} name="option" value={el.value} checked={checkboxValue.indexOf(el.value) !== -1} onChange={onCheckboxChange} />
                                        <label htmlFor={"checkOption"+id}>{el.label}</label>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
            </>
            }
            <Button label="Generar" onClick={consultarDatos} className="p-button-outlined mr-2 mb-2" />
    </div>;
};

export default GenerarReporte;
