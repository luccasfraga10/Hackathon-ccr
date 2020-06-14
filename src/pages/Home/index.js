/* eslint-disable */
import React, { useEffect } from 'react';
import Header from '../../components/Header';

import api from '../../services/map';

const PageHome = () => {
  const getApiFake = async () => {



    const response = await api.get('distancematrix/json?units=imperial&origins=-23.4814376,-46.7458937&destinations=-23.5353856,-46.8979554&key=AIzaSyCjqDVWvcWUMDNNEf9FZohN4cfk1ZHtTIY');
    console.log(response);
  };

  useEffect(() => {
    getApiFake();
  }, []);

  return (
    <>
      <Header />
      <p>olá</p>
    </>
  );
};

export default PageHome;
