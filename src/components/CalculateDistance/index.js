import React, { useEffect } from 'react';

import getDistances from '../../services/test';

const CalculateDistance = () => {
  const getDistanceRoute = async () => {
    const init = { lat: -23.4814376, long: -46.7458937 };
    const end = { lat: -23.5353856, long: -46.8979554 };

    try {
      const response = await getDistances(init, end);
      console.log('Deu bom', response);
    } catch (err) {
      console.log('erro =>', err);
    }
  };

  useEffect(() => {
    getDistanceRoute();
  }, []);

  return (
    <div>
      <h1>s</h1>
    </div>
  );
};

export default CalculateDistance;
