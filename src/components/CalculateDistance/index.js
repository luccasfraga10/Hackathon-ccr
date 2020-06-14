import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MetersToKm, TimeToMin } from '../../utils';

import getApiDistance from '../../services/distance';

const CalculateDistance = ({ coordinates }) => {
  const [distance, setDistance] = useState([]);

  const getDistanceRoute = async () => {
    const init = {
      lat: coordinates[0].latitude,
      long: coordinates[0].longitude,
    };
    const end = {
      lat: coordinates[1].latitude,
      long: coordinates[1].longitude,
    };

    try {
      const headers = {
        'x-rapidapi-host': 'trueway-matrix.p.rapidapi.com',
        'x-rapidapi-key': 'f63dfed683msh26a3583d88a159dp1b2016jsnd5d25619ace9',
        'content-type': 'application/json',
        useQueryString: true,
      };

      const response = await getApiDistance.get(
        `CalculateDrivingMatrix?destinations=${init.lat},${init.long}&origins=${end.lat},${end.long}`,
        { headers }
      );

      setDistance(response.data);
    } catch (err) {
      console.log('Err =>', err);
    }
  };

  useEffect(() => {
    getDistanceRoute();
  }, []);

  return (
    <div>
      <p>
        Distância:
        <b>{distance.distances && MetersToKm(distance.distances)} Km</b>
      </p>
      <p>
        Tempo:<b>{distance.durations && TimeToMin(distance.durations)} Min</b>
      </p>
    </div>
  );
};

CalculateDistance.propTypes = {
  coordinates: PropTypes.array.isRequired,
};

CalculateDistance.defaultProps = {};

export default CalculateDistance;
