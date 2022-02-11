import axios from "axios";

const API = process.env.REACT_APP_API + '/cargo'

export class CargoService {

    getAll(){
        return axios.get(`${API}`)
    }

    getTableData(){
        return axios.get(`${API}/default/table-data`)
    }

    update(id,data){
        return axios.put(`${API}/${id}`, data)
    }

    create(data){
        return axios.post(`${API}`, data)
    } 

    delete(id){
        return axios.delete(`${API}/${id}`)
    }
}

export default CargoService