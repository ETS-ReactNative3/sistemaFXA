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
    
    getEmpleadosInactivos(){
        return axios.get(`${API}/inactivos`)
    }
    
    getEmpleado(id){
        return axios.get(`${API}/${id}`)
    }

    updateEmpleado(id, data){
        return axios.put(`${API}/${id}`, data)
    }

    createEmpleado(data){
        return axios.post(API, data)
    }

    changeState(id, action){
        return axios.put(`${API}/${action}/${id}`)
    }

    getEmpleadosPermisos(){
        return axios.get(`${API}/permisos`)
    }

    updateRol(idUsu,idRol){
        return axios.put(`${API}/cambio-rol/${idUsu}`, {idRol})
    }

    getInfoPerfil(idUsu){
        return axios.get(`${API}/info-perfil/${idUsu}`)
    }
}