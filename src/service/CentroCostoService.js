import axios from "axios";

const API = process.env.REACT_APP_API + '/centro-costo'

class CentroCostoService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default CentroCostoService