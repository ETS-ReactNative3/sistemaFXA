import axios from "axios";

const API = process.env.REACT_APP_API + '/estudios-realizados'

class EstudiosService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default EstudiosService