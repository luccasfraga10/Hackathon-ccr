import axios from 'axios';

const getApiPedagio = axios.create({
  baseURL: process.env.REACT_APP_PEDAGIO_URL,
});

export default getApiPedagio;
