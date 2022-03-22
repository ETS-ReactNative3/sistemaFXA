import axios from "axios";

const API = process.env.REACT_APP_API + '/upload-file'

class UploadFilesService {

    uploadPerfilImage(data){
        return axios.post(`${API}/perfil-image`,data)
    }

}

export default UploadFilesService