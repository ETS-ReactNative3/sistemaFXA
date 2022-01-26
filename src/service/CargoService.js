import axios from "axios";

const API = process.env.REACT_APP_API + '/cargo'

class CargoService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default CargoService