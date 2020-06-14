import axios from 'axios';

const getApiDistance = axios.create({
  baseURL: process.env.REACT_APP_DISTANCE_URL,
});

export default getApiDistance;
