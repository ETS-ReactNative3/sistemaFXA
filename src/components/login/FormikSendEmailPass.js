import { useFormik } from 'formik';
/* import axios from 'axios'; */
import CredencialService from '../../service/CredencialService';

const credencialservice = new CredencialService()

class FormikSendEmailPass {

    formikSendEmail(params){     
        let formik = useFormik({
            initialValues: {
                numero_identificacion:'',
                nombre:'',
                centro_costo:'',
                cargo:'',
                tel_contacto:'',
                ciudad:'',
                mensaje:''
            },
            validate: data =>{
                let errors = {}
                
                if (!data.numero_identificacion) {
                    errors.numero_identificacion = 'Obligatorio';
                }
                if (!data.nombre) {
                    errors.nombre = 'Obligatorio';
                }
                if (!data.centro_costo) {
                    errors.centro_costo = 'Obligatorio';
                }
                if (!data.cargo) {
                    errors.cargo = 'Obligatorio';
                }
                if (!data.tel_contacto) {
                    errors.tel_contacto = 'Obligatorio';
                }
                if (!data.ciudad) {
                    errors.ciudad = 'Obligatorio';
                }

                return errors

            },
            onSubmit: data =>{
                console.log("enviao")
            }
        })
        return formik
    }
}

export default FormikSendEmailPass