import axios from "axios";

const API = process.env.REACT_APP_API + '/upload-file'

class UploadFilesService {

    uploadPerfilImage(data){
        return axios.post(`${API}/perfil-image`,data)
    }

    uploadFile(data){
        return axios.post(`${API}/file-emp`, data)
    }

}

export default UploadFilesService