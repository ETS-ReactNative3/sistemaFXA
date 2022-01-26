import { useFormik } from 'formik';
import { EmpleadoService } from '../../service/EmpleadoService';

const serviceEmpleado = new EmpleadoService()

class FormikEmp {
    formikUsuario(options){     
        return useFormik({
            initialValues: {},
            validate: data =>{
                let errors = {}
                
                if(!data.nombres){
                    errors.nombres = 'Los nombres Son Obligatorios.'
                }else if(!/^[A-Za-zá-ýÁ-Ý ]+$/.test(data.nombres)){
                    errors.nombres = 'El nombre solo acepta letras y espacios'
                }else if(!(data.nombres.length >= 3 && data.nombres.length <=25)){
                    errors.nombres = 'Cantidad de caracteres de 3 a 25.'
                }
                
                if(!data.apellidos){
                    errors.apellidos = 'Los apellidos son obligatorios.'
                }else if(!/^[A-Za-zá-ýÁ-Ý ]+$/.test(data.apellidos)){
                    errors.apellidos = 'El apellido solo acepta letras y espacios'
                }else if(!(data.apellidos.length >= 3 && data.apellidos.length <=25)){
                    errors.apellidos = 'Cantidad de caracteres de 3 a 25.'
                }

                if(!data.id_tipo_identificacion_fk){
                    data.id_tipo_identificacion_fk = undefined
                    errors.id_tipo_identificacion_fk = 'El tipo de identificacion es obligatorios.'
                }

                if(!data.numero_identificacion){
                    errors.numero_identificacion = 'El número de identificación obligatorio.'
                }

                if(errors.nombres || errors.apellidos){
                    errors.datos = 'error'
                }

                console.log(data);
                return errors

            },
            onSubmit: data =>{
                if(data.id_empleado){
                    serviceEmpleado.updateEmpleado(data.id_empleado, data).then(res=>{
                        options.setToatsEmpelado({ severity: 'success', summary: 'Todo Bien', detail: res.data, life: 3000 })
                        options.hideModal()
                    })
                }
            }
        })
    }
}

export default FormikEmp