import axios from "axios";

const API = process.env.REACT_APP_API + '/tipo-identificacion'

class TipoIdentificacionService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default TipoIdentificacionService