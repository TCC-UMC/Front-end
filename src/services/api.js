import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-tccumc.herokuapp.com',
})

export default api;