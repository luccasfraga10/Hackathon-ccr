import axios from 'axios';

const ERROR_TIMEOUT =
  'Infelizmente estamos com problemas de conexão, tente novamente mais tarde.';

const createHttp = () => {
  // const env = process.env.NODE_ENV;
  const baseURL = 'api';
  // env === 'development' ? '/api' : process.env.REACT_APP_MAP_URL;

  const axiosInstance = axios.create({ baseURL });

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (!error.response) {
        throw new Error(ERROR_TIMEOUT + error);
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default createHttp();
