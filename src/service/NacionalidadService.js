import axios from "axios";

const API = process.env.REACT_APP_API + '/nacionalidad'

class NacionalidadService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default NacionalidadService