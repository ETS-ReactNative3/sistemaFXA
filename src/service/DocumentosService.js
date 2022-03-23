import axios from "axios";

const API = process.env.REACT_APP_API + '/documentos'

class DocumentosService {


    getByIdEmp(id){
        return axios.get(`${API}/docs-emp/${id}`)
    }


}

export default DocumentosService