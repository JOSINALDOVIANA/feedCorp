import axios from 'axios';

const api = axios.create({
    baseURL: `http://109.123.243.212:3001/`
    // http://109.123.243.212:3001/
   
    
})

export default api;