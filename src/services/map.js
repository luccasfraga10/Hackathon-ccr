import axios from 'axios';

const ApiMap = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/distancematrix/',
});

export default ApiMap;
