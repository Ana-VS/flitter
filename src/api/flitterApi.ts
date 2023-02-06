import axios from 'axios';

const flitterApi = axios.create ({
    baseURL: 'http://localhost:3000/api',
})

export default flitterApi