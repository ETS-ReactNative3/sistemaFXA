import axios from "axios";

const API = process.env.REACT_APP_API + '/talla-calzado'

class TallaCalzadoService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default TallaCalzadoService