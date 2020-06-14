import React from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import truckIcon from '../../assets/icons/shipment-truck.svg'
import monitorIcon from '../../assets/icons/monitor-heart.svg'
import shopIcon from '../../assets/icons/shop-street.svg'
import { Link } from 'react-router-dom'

import useStyles from './styles'

const menu = [
  {
    label: 'Viagens',
    icon: truckIcon,
    path: '/',
  },
  {
    label: 'Parceiros',
    icon: shopIcon,
    path: '/',
  },
  {
    label: 'Saúde',
    icon: monitorIcon,
    path: '/',
  },
  {
    label: 'Pontos',
    icon: shopIcon,
    path: '/',
  }
]

const PageHome = () => {
  const classes = useStyles()
  return (
    <Box p={3}>
      {/* <div className={classes.umaClasseQualquer}>
        Teste de html com classe
      </div>
      */}
      <Grid container spacing={2}>
        {
          menu.map(({label, icon, path}, index) => {
            return (
              <Grid item xs={6}>
                <Link to={path} className={classes.menuLink}>
                  <Paper elevation={0} className={classes.paper}>
                    <img src={icon} aria-hidden alt="" />
                    <Typography className={classes.menuLabel}>{label}</Typography>
                  </Paper>
                </Link>
              </Grid>
            )
          })
        }

      </Grid>
    </Box>
  );
};

export default PageHome;
