import axios from "axios";

const API = process.env.REACT_APP_API + '/credencial'

class CredencialService {

    login(data){
        return axios.post(`${API}/login`,data)
    }

    getDatatopbar(){
        return axios.get(`${API}/data-top-bar`)
    }

    changePass(data){
        return axios.post(`${API}/chage-pass`,data)
    }

}

export default CredencialService