import axios from "axios";

const API = process.env.REACT_APP_API + '/caja-compensacion'

class CajaCompService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default CajaCompService