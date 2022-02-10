import axios from "axios";

const API = process.env.REACT_APP_API + '/cargo'

export class CargoService {

    getAll(){
        return axios.get(`${API}`)
    }

}
export class Service {
    
    getTableData(){
        return axios.get(`${API}`)
    }
}

export default CargoService