import axios from "axios";

const API = process.env.REACT_APP_API + '/estado-civil'

class EstadoCivilService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default EstadoCivilService