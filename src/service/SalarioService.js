import axios from "axios";

const API = process.env.REACT_APP_API + '/salario'

class SalarioService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default SalarioService