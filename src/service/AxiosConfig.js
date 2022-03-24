import axios from "axios";

axios.defaults.headers.common['token-login'] = localStorage.getItem('token')

let prueba = 0


axios.interceptors.response.use(config=>{
    axios.defaults.headers.common['token-login'] = localStorage.getItem('token')
    return config;
  }, err=> {
    // Do something with request error
    if ((err.response.status === 401 || err.response.status === 408) && prueba===0) {
        localStorage.removeItem('token')
        alert(err.response.data.error)
        window.location.href = '/#/log';
        window.location.reload()
        prueba = 1
    }if (err.response.status === 403  && prueba===0) {
        alert(err.response.data.error)
        window.location.href = '/#/dash/perfil';
        window.location.reload()
        prueba = 1
    }
  });