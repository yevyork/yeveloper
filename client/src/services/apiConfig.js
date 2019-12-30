import axios from 'axios'

let apiUrl;

const apiUrls = {
    production:'',
    development:'http://localhost:3000/api'
}

window.location.hostname === "localhost" ? (apiUrl = apiUrls.development): (apiUrl = apiUrls.production);

export const api = axios.create({
    baseURL: apiUrl
})

export default api