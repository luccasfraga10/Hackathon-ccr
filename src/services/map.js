import axios from 'axios';

const ApiMap = axios.create({
  baseURL: 'https://distance-calculator.p.rapidapi.com/v1/',
});

export default ApiMap;
