import axios from "axios";

const API = process.env.REACT_APP_API + '/ciudad'

class CiudadService {

    getCiudades(){
        return axios.get(`${API}`)
    }

    getAll(){
        return axios.get(`${API}`)
    }

}

export default CiudadService