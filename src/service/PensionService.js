import axios from "axios";

const API = process.env.REACT_APP_API + '/pension'

class PensionService {

    getAll(){
        return axios.get(`${API}`)
    }

}

export default PensionService