import axios from "axios";

const API = process.env.REACT_APP_API + '/cesantias'

class CesantiasService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default CesantiasService