import React from 'react';
import { Box, Grid, Paper, Typography, Avatar, SvgIcon } from '@material-ui/core';
import truckIcon from '../../assets/icons/shipment-truck.svg'
import monitorIcon from '../../assets/icons/monitor-heart.svg'
import shopIcon from '../../assets/icons/shop-street.svg'
import pointsIcon from '../../assets/icons/points.svg'
import notificationIcon from '../../assets/icons/notification.svg'
import mapPointIcon from '../../assets/icons/map-point.svg'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
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
      <Box mb={2}><img src={notificationIcon} aria-hidden="true" alt="" /></Box>
      <Box component={Typography} color={colors.grayLight} variant="caption">Bem vindo</Box>
      <Box display="flex" mb={4} justifyContent="space-between">
        <Typography className={classes.fullName}>Marcos Felipe</Typography>
        <Avatar className={classes.avatar}>MF</Avatar>
      </Box>
      <Grid container className={classes.menuArea} spacing={2}>
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

      <Box className={classes.bottomInfo}>
        <img src={mapPointIcon} className={classes.mapIcon} alt="" aria-hidden="true" />
        <Typography variant="subtitle2">Criar agendamento de viagem</Typography>
        <Typography className={classes.bottomInfoDescription}>Organize suas viagens e ganhe pontos</Typography>
        <Link to="/" className={classes.createTrip}>
          Criar agendamento <SvgIcon className={classes.createTripIcon} component={ArrowForwardIosIcon} />
        </Link>
      </Box>
    </Box>
  );
};

export default PageHome;
