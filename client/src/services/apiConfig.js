
let apiUrl
const apiUrls = {
  production: 'https://yeveloper.herokuapp.com/api',
  development: 'https://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl