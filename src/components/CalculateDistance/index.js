import React, { useState, useEffect } from 'react';
import { MetersToKm, TimeToMin } from '../../utils';

import getApiDistance from '../../services/distance';
import getApiPedagio from '../../services/pedagios';

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

  const getPedagio = async () => {
    try {
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'x-rapidapi-host': 'territorial-pedagio-v1.p.rapidapi.com',
        'x-rapidapi-key': 'af83cb1616msh1339e8055ca4fc4p10acdejsn1e2ad7f93be8',
        'content-type': 'application/json',
        useQueryString: true,
      };

      const request = {
        jsonrpc: '2.0',
        method: 'tollbooth.route',
        params: [
          {
            from_cord: `(${coordinates[0].latitude} ${coordinates[0].longitude})`,
            dest_cord: `(${coordinates[1].latitude} ${coordinates[1].longitude})`,
            tipo_veic: 'auto2eixos',
          },
        ],
        id: 'jsonrpc',
      };
      const response = await getApiPedagio.post('json/', request, { headers });

      console.log('pedagios', response);
    } catch (err) {
      console.log('Err =>', err);
    }
  };

  useEffect(() => {
    getDistanceRoute();
    getPedagio();
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

export default CalculateDistance;
