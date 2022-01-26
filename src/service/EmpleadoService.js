import axios from "axios";

const API = process.env.REACT_APP_API + '/empleado'

export class EmpleadoService {

    getEmpleadosDash(){
        return axios.get(`${API}/nuevos-empleados`)
    }

    getDatosCardsDash(){
        return axios.get(`${API}/datos-cartas`)
    }

    getPorcentajeEmpleado(){
        return axios.get(`${API}/porcentaje-empleados`)
    }

    getEmpleados(){
        return axios.get(API)
    }
    
    getEmpleado(id){
        return axios.get(`${API}/${id}`)
    }

    updateEmpleado(id, data){
        return axios.put(`${API}/${id}`, data)
    }

}