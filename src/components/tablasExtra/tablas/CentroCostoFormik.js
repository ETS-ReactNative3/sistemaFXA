import { useFormik } from 'formik';
import CentroCostoService from '../../../service/CentroCostoService';

const centroCostoService = new CentroCostoService()

class CentroCostoFormik {

    formik(params){     
        let formik = useFormik({
            initialValues: {
                nombre_centro_costo:'',
                id_ciudad_fk:''
            },
            validate: data =>{
                let errors = {}
                
                if (!data.nombre_centro_costo) {
                    errors.nombre_centro_costo = 'Ingrese el nombre del centro de costo';
                }else if(!/^[A-Za-zá-ýÁ-Ý ]+$/.test(data.nombre_centro_costo)){
                    errors.nombre_centro_costo = 'El nombre solo permite letras y espacios';
                }else if(!(data.nombre_centro_costo.length >= 3 && data.nombre_centro_costo.length <= 25)){
                    errors.nombre_centro_costo = 'Cantidad de caracteres de 3 a 25 .';
                }
    
                if (!data.id_ciudad_fk) {
                    errors.id_ciudad_fk = 'Seleccione una ciudad';
                }

                return errors

            },
            onSubmit: data =>{
                centroCostoService.createCentroCosto(data).then(res=>{
                    alert(res.data)
                })
            }
        })
        return formik
    }
}

export default CentroCostoFormik