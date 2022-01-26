import axios from "axios";

const API = process.env.REACT_APP_API + '/tipo-contrato'

class TipoContratoService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default TipoContratoService