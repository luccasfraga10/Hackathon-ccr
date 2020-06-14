/* eslint-disable */
import React, { useEffect } from 'react';

import api from '../../services/api';

const PageHome = () => {
  const getApiFake = async () => {
    const response = await api.get('test');
    console.log(response);
  };

  useEffect(() => {
    // getApiFake();
  }, []);

  return (
    <>
      <p>olá</p>
    </>
  );
};

export default PageHome;
