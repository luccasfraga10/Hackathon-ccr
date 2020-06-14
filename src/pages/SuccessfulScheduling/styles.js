import { makeStyles } from '@material-ui/core';
import colors from '../../utils/colors';

export default makeStyles(theme => ({
  paper: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    width: 'calc(100% + 48px)',
    marginLeft: -theme.spacing(3),
    height: '100vh',
  },
  title: {
    fontSize: '16px',
    display: 'block',
    marginBottom: theme.spacing(3),
    fontWeight: 'bold'
  },
  text: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
  },
  iconSuccess: {
    display: 'flex',
    margin: '0 auto',
    marginBottom: theme.spacing(3)
  },
  paperTitle: {
    display: 'block',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '16px'
  },
  description: {
    color: colors.grayLight,
    fontSize: '14px',
    marginBottom: theme.spacing(3),
    display: 'block'
  },
  contentTravel: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  contentTravelImg: {
    marginRight: theme.spacing(3)
  },
  textTravel: {
    display: 'block',
    marginBottom: '10px'
  },
  contentTravelInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '60px',
  },
  contentTravelDate: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    borderTop: '1px solid #E8E8E8',
    paddingTop: '30px',
  },
  textTravelDate: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginBottom: '20px'
  }
}))

