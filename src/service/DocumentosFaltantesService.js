import axios from "axios";

const API = process.env.REACT_APP_API + '/documentos-faltantes'

class DocumentosFaltantesService {

    create(data){
        return axios.post(`${API}`,data)
    }

    getByIdEmp(id){
        return axios.get(`${API}/${id}`)
    }

    deleteDoc(data){
        return axios.post(`${API}/delete-doc`,data)
    }

}

export default DocumentosFaltantesService