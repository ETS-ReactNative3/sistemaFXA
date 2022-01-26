import axios from "axios";

const API = process.env.REACT_APP_API + '/tipo-cuenta'

class TipoCuentaService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default TipoCuentaService