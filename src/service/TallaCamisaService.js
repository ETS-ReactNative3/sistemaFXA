import axios from "axios";

const API = process.env.REACT_APP_API + '/talla-camisa'

class TallaCamisaService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default TallaCamisaService