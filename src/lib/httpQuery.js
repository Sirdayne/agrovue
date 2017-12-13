import axios from 'axios'

let token = localStorage.getItem('token')

let AUTH_TOKEN = 'Bearer ' + token

let api = axios.create({
  baseURL: 'http://agroplanapi-test.azurewebsites.net/api/',
  timeout: 180000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

api.defaults.headers.common['Authorization'] = AUTH_TOKEN

let tokenApi = axios.create({
  baseURL: 'http://agroplanapi-test.azurewebsites.net/',
  timeout: 180000,
  responseType: 'json',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default{
  get (path) {
    return api.get(path)
      .then(function (response) {
        console.log(response)
        return response
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  postToken (path, data) {
    return tokenApi.post(path, data)
      .then(function (response) {
        console.log(response.data)
        token = response.data.access_token
        localStorage.setItem('token', token)
        return response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
