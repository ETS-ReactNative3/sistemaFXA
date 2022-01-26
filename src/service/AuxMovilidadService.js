import axios from "axios";

const API = process.env.REACT_APP_API + '/aux-movilidad'

class AuxMovilidadService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default AuxMovilidadService