import React from 'react';
import { Box, Grid, Paper, Typography, Avatar } from '@material-ui/core';
import truckIcon from '../../assets/icons/shipment-truck.svg'
import monitorIcon from '../../assets/icons/monitor-heart.svg'
import shopIcon from '../../assets/icons/shop-street.svg'
import pointsIcon from '../../assets/icons/points.svg'
import notificationIcon from '../../assets/icons/notification.svg'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'

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
    icon: pointsIcon,
    path: '/',
  }
]

const PageHome = () => {
  const classes = useStyles()
  return (
    <Box p={3}>
      <Box mb={1}><img src={notificationIcon} aria-hidden="true" alt="" /></Box>
      <Box component={Typography} color={colors.grayLight} variant="caption">Bem vindo</Box>
      <Box display="flex" mb={3} justifyContent="space-between">
        <Typography className={classes.fullName}>Marcos Felipe</Typography>
        <Avatar className={classes.avatar}>MF</Avatar>
      </Box>
      <Grid container spacing={2}>
        {
          menu.map(({label, icon, path}, index) => {
            return (
              <Grid item xs={6}>
                <Link to={path} className={classes.menuLink}>
                  <Paper elevation={0} className={classes.paper}>
                    <img src={icon} aria-hidden="true" alt="" />
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
