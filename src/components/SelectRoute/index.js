
import React, { useState } from 'react';
import useStyles from './styles'
import Button from '@material-ui/core/Button';
import distanceIcon from '../../assets/icons/icon-distance.svg';
import SearchBar from '../SearchBar';
import RouteInformation from '../RouteInformation';

const Header = ({ onNext }) => {
  const classes = useStyles();
  const [distance, setDistance] = useState([]);

  const handleNext = () => {
    onNext();
  }

  return (
    <>
      <div className={classes.content}>
        <img src={distanceIcon} alt="Icone de distancia" />
        <div className={classes.contentSearch}>
          <SearchBar id={1} text="De onde ?" valueDistance={distance} setDistance={setDistance} />
          <SearchBar id={2} text="Para onde ?" valueDistance={distance} setDistance={setDistance} />
        </div>
      </div>

      {distance.length === 2 && (
        <RouteInformation coordinates={distance} />
      )}

      <div className={classes.boxButton}>
        <Button disabled={distance.length < 2} variant="contained" color="primary" className={classes.button} size="large" onClick={handleNext}>
          Continuar
        </Button>
      </div>
    </>
  );
};

export default Header;
