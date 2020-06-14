import React, { useState, useEffect } from 'react'

import {
  Tabs,
  Tab,
  Paper,
  Box,
  Typography,
  SvgIcon,
  CircularProgress,
  useTheme
} from '@material-ui/core';

import RoomIcon from '@material-ui/icons/Room';
import api from '../../services/api'
import useStyles from './styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

const TripBox = ({ destiny, date, distance, time, points, classes }) => {
  console.log('time', time)
  const theme = useTheme()
  return (
    <Box p={2} mb={2} elevation="0" component={Paper} display="flex" alignItems="center">
      <Box mr={1}><SvgIcon color="primary" component={RoomIcon} /></Box>
      <Box overflow="hidden">
        <Typography className={classes.destiny} component="p">{destiny}</Typography>
        <Typography component="div" className={classes.infosTrip}>
          {time} - {date} {distance}km
        </Typography>
        <Box component={Typography} color={theme.palette.success.main}> <b>{points}Pts</b></Box>
      </Box>
      <Box ml={1}><SvgIcon component={ArrowForwardIosIcon} /></Box>
    </Box>
  )
}

const Trips = () => {
  const [value, setValue] = useState(0);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const classes = useStyles()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getAllTrips = async () => {
    try {
      const { data } = await api.get('trips')
      setTrips(data)
      setLoading(false)
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getAllTrips()
    }, 600)
  }, [])


  return (
    <div>
      {
        loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Viagens agendadas" />
              <Tab label="Viagens Finalizadas" />
            </Tabs>

            <TabPanel value={value} index={0}>
              {
                trips.map((trip, index) => <TripBox classes={classes} key={index} {...trip} />)
              }
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
          </>
        )
      }
    </div>
  )
}

export default Trips
