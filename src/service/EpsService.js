import axios from "axios";

const API = process.env.REACT_APP_API + '/eps'

class EpsService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default EpsService