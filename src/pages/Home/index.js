import React, { forwardRef, useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  SvgIcon,
  Dialog,
  Slide,
  Button,
  IconButton,
} from '@material-ui/core';
import truckIcon from '../../assets/icons/shipment-truck.svg'
import monitorIcon from '../../assets/icons/monitor-heart.svg'
import shopIcon from '../../assets/icons/shop-street.svg'
import pointsIcon from '../../assets/icons/points.svg'
import notificationIcon from '../../assets/icons/notification.svg'
import mapPointIcon from '../../assets/icons/map-point.svg'
import cornersIcon from '../../assets/icons/corners.svg'
import gasLoadIcon from '../../assets/icons/gas-load.svg'
import pedagioIcon from '../../assets/icons/pedagio.svg'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import CloseIcon from '@material-ui/icons/Close'
import useStyles from './styles'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const nextRoute = forwardRef((props, ref) => <Link to="/trip" {...props} ref={ref} />)

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

const infos = [
  {
    label: 'Organizar suas viagens ficou mais fácil, selecione seu destino, data, horário e pronto.',
    icon: cornersIcon
  },
  {
    label: 'Chega de surpresas durante o trajeto, saiba quantos pedágios tem em sua rota e o valor total a ser pago.',
    icon: gasLoadIcon
  },
  {
    label: 'Saiba quantos postos de de gasolina terá no seu trajeto e quanto você terá de gastos  de diesel.',
    icon: pedagioIcon
  }
]

const PageHome = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


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
              <Grid item xs={6} key={index}>
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
        <Typography component="button" onClick={handleClickOpen} className={classes.createTrip}>
          Criar agendamento <SvgIcon className={classes.createTripIcon} component={ArrowForwardIosIcon} />
        </Typography>
      </Box>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <Box bgcolor={colors.primary} minHeight="100%" p={3}>

          <IconButton className={classes.closeIcon} onClick={handleClose}><CloseIcon /></IconButton>
          <Box pb={2} display="flex" justifyContent="center">
            <img width="50px" src={mapPointIcon} alt="" aria-hidden="true" />
          </Box>
          <Box component={Typography} color={colors.white} align="center" variant="subtitle2">Como funciona o agendamento e quais são seus beneficios</Box>


          {
            infos.map(({ label, icon }, index) => {
              return (
                <Box display="flex" alignItems="center" my={2} key={index}>
                  <img src={icon} aria-hidden="true" alt="" />
                  <Box pl={2} component={Typography} color={colors.white}>{label}</Box>
                </Box>
              )
            })
          }

          <Box py={4}>
            <Box component={Typography} color={colors.white} variant="caption">Após o ativamento da viagem enviaremos mensagens de voz durante o trajeto com algumas sugestões de saúde e segurança, todas essas sugestão valem pontos para você trocar em diversos itens em nossos parceiros.
            </Box>
          </Box>

          <Button component={nextRoute} variant="outlined" fullWidth>Continuar</Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default PageHome;
