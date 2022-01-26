import axios from "axios";

const API = process.env.REACT_APP_API + '/tiempo'

class TipoTiempoService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default TipoTiempoService