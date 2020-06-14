import React from 'react';
import IconSuccess from '../../assets/icons/icon-success.svg';
import useStyles from './styles'
import { Box, Paper, Typography } from '@material-ui/core';
import distanceIcon from '../../assets/icons/icon-distance.svg';

const SuccessfulScheduling = () => {
  const classes = useStyles();
  return (
    <Box p={2} pt={7}>
      <img className={classes.iconSuccess} src={IconSuccess} alt=""/>

      <Typography className={classes.text}>Viagem agendada<br /> com sucesso</Typography>


      <Paper>
        <Box p={3}>
          <Typography component="b" className={classes.paperTitle}>Detalhes da viagem</Typography>
          <Typography component="span" className={classes.description}>Sua rota</Typography>

          <div className={classes.contentTravel}>
            <img src={distanceIcon} alt="" className={classes.contentTravelImg} />
            <div className={classes.contentTravelInfo}>

              {localStorage.getItem('info') && JSON.parse(localStorage.getItem('info')).map(item => (
                <Typography key={item} component="span" className={classes.textTravel}>{item}</Typography>
              ))}
            </div>
          </div>

          <div className={classes.contentTravelDate}>
            <Typography component="span" className={classes.textTravelDate}>Data da viagem <b>{localStorage.getItem('date')}</b></Typography>
            <Typography component="span" className={classes.textTravelDate}>Horário da viagem <b>{localStorage.getItem('time')}</b></Typography>
          </div>
        </Box>
      </Paper>
    </Box>
  )
}

export default SuccessfulScheduling;
