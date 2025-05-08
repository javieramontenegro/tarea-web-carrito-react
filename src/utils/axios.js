import axios from 'axios';

// Cambia la URL a la que corresponda en tu entorno
const instance = axios.create({
  baseURL: 'http://127.0.0.1:3001/api/', // URL del backend
});

export default instance;
