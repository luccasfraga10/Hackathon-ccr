import React, { useEffect } from 'react';
import Header from '../../components/Header';

import api from '../../services/api';

const PageHome = () => {
  const getApiFake = async () => {
    const response = await api.get('test');

    // console.log(response);
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
