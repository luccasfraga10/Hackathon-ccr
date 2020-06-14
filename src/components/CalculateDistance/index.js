import React, { useEffect } from 'react';
import { getDistance } from 'geolib';

const CalculateDistance = () => {
  useEffect(() => {
    const a = getDistance(
      { latitude: -23.5353856, longitude: -46.8979554 },
      { latitude: -23.4814376, longitude: -46.7458937 }
    );

    console.log('aaa =>', a);
    // https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=-23.4814376,-46.7458937&destinations=-23.5353856,-46.8979554&key=AIzaSyCjqDVWvcWUMDNNEf9FZohN4cfk1ZHtTIY
  }, []);

  return (
    <div>
      <h1>s</h1>
    </div>
  );
};

export default CalculateDistance;
