import axios from "axios";

const API = process.env.REACT_APP_API + '/arl'

class ArlService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default ArlService