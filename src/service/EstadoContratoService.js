import axios from "axios";

const API = process.env.REACT_APP_API + '/estado-contrato'

class EstadoContratoService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default EstadoContratoService