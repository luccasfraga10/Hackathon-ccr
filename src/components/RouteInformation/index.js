/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles'
import { MetersToKm, TimeToMin } from '../../utils';
import iconTrip from '../../assets/icons/trip-distance.svg';
import iconAverage from '../../assets/icons/average.svg';
import iconFuel from '../../assets/icons/fuel.svg';
import iconS from '../../assets/icons/iconS.svg';

import getApiDistance from '../../services/distance';

const CalculateDistance = ({ coordinates }) => {
  const classes = useStyles();
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
    <Paper className={classes.paper}>
      <Typography component="b" className={classes.title}>Informações sobre a rota</Typography>

      <ul className={classes.list}>

        <li className={classes.itemList}>
          <Typography component="b" className={classes.itemListTitle}>
            <img src={iconS} alt="Saúde durante a rota" className={classes.iconTitle}/>
            Saúde durante a rota
          </Typography>
          <div className={classes.itemListContent}>
            <Typography component="span" className={classes.itemListContentText}>Parada para alongamento</Typography>
            <Typography component="span" className={classes.itemListContentText}>Parada para descansar</Typography>
          </div>
        </li>


        <li className={classes.itemList}>
          <Typography component="b" className={classes.itemListTitle}>
            <img src={iconTrip} alt="Trajeto" className={classes.iconTitle}/>
            Trajeto
          </Typography>
          <div className={classes.itemListContent}>
            <Typography component="span" className={classes.itemListContentText}>Distância <b>{distance.distances && MetersToKm(distance.distances).toFixed(2)}km</b></Typography>
            <Typography component="span" className={classes.itemListContentText}>Tempo médio de viagem <b>{distance.durations && TimeToMin(distance.durations).toFixed(2)}min</b></Typography>
          </div>
        </li>

        <li className={classes.itemList}>
          <Typography component="b" className={classes.itemListTitle}>
            <img src={iconFuel} alt="Combustível" className={classes.iconTitle}/>
            Combustível
          </Typography>
          <div className={classes.itemListContent}>
            <Typography component="span" className={classes.itemListContentText}>Queima média de diesel <b>3km por litro</b></Typography>
            <Typography component="span" className={classes.itemListContentText}>Valor médio gasto com diesel <b>R${distance.distances && (MetersToKm(distance.distances) * 3).toFixed(2)}</b></Typography>
          </div>
        </li>

        <li className={classes.itemList}>
          <Typography component="b" className={classes.itemListTitle}>
            <img src={iconAverage} alt="Média de pontuação nesta viagem" className={classes.iconTitle}/>
            Média de pontuação nesta viagem
          </Typography>
          <div className={classes.itemListContent}>
            <Typography component="span" className={classes.itemListContentText}>Pontuação <b>230Pts</b></Typography>
            <Typography component="span" className={classes.itemListContentText}>Pontuação bonus <b>20Pts</b></Typography>
          </div>
        </li>
      </ul>
    </Paper>
  );
};

CalculateDistance.propTypes = {
  coordinates: PropTypes.array,
};

CalculateDistance.defaultProps = {
  coordinates: []
};

export default CalculateDistance;
