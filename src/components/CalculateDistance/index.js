import React, { useEffect } from 'react';

import AxiosHttp from '../../services/http';

const CalculateDistance = () => {
  const getApi = async () => {
    const response = await AxiosHttp.get(
      '/distancematrix/json?units=imperial&origins=-23.4814376,-46.7458937&destinations=-23.5353856,-46.8979554&key=AIzaSyCjqDVWvcWUMDNNEf9FZohN4cfk1ZHtTIY'
    );

    console.log(response);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <h1>s</h1>
    </div>
  );
};

export default CalculateDistance;
