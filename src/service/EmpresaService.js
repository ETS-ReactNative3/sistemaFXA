import axios from "axios";

const API = process.env.REACT_APP_API + '/empresa'

class EmpresaService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default EmpresaService