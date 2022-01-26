import axios from "axios";

const API = process.env.REACT_APP_API + '/ciudad'

class CiudadService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default CiudadService