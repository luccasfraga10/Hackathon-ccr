import axios from 'axios';

const ApiMap = axios.create({
  baseURL: process.env.REACT_APP_MAP_URL,
});

export default ApiMap;
