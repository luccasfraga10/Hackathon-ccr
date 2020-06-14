import React, { useEffect } from 'react';

import api from '../../services/test';

const CalculateDistance = () => {
  const rola = async () => {
    const init = { lat: -23.4814376, long: -46.7458937 };
    const end = { lat: -23.5353856, long: -46.8979554 };

    await api.getDistances(init, end);
    try {
      console.log('Deu bom');
    } catch (err) {
      console.log('erro =>', err);
    }
  };

  useEffect(() => {
    // rola();
  }, []);

  return (
    <div>
      <h1>s</h1>
    </div>
  );
};

export default CalculateDistance;
