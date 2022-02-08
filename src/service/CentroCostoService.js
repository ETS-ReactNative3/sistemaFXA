import axios from "axios";

const API = process.env.REACT_APP_API + '/centro-costo'

class CentroCostoService {

    getAll(){
        return axios.get(`${API}`)
    }

    getTableData(){
        return axios.get(`${API}/tableData`)
    }

    updateCentroCosto(id,data){
        return axios.put(`${API}/${id}`,data)
    }

    createCentroCosto(data){
        return axios.post(`${API}`,data)
    }

}

export default CentroCostoService