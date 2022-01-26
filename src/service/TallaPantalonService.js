import axios from "axios";

const API = process.env.REACT_APP_API + '/talla-pantalon'

class TallaPantalonService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default TallaPantalonService