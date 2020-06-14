import { makeStyles } from '@material-ui/core';
import colors from '../../utils/colors';

export default makeStyles(theme => ({
  paper: {
    height: 131,
    padding: theme.spacing(3),
  },
  menuLabel: {
    color: colors.black,
    marginTop: theme.spacing(3),
  },
  menuLink: {
    textDecoration: 'none',
  },
  fullName: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.black,
  },
  avatar: {
    fontSize: 14
  },
  mapIcon: {
    position: 'absolute',
    right: theme.spacing(4),
    top: 58,
  },
  menuArea: {
    paddingBottom: 180,
  },
  bottomInfo: {
    background: colors.primary,
    padding: theme.spacing(5, 4),
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: colors.white,
    borderTopLeftRadius: theme.shape.borderRadius * 6,
    borderTopRightRadius: theme.shape.borderRadius * 6,
    maxWidth: 375,
    transform: 'translateX(-50%)',
    left: '50%',
  },
  bottomInfoDescription: {
    opacity: .7,
    paddingRight: '45%',
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(3),
  },
  createTrip: {
    color: colors.white,
    textDecoration: 'none',
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
    fontFamily: theme.typography.fontFamily,
    letterSpacing: '1.1px',
    display: 'flex',
    background: 'none',
    border: 0
  },
  createTripIcon: {
    fontSize: 14,
    marginLeft: 8
  },
  closeIcon: {
    color: colors.white
  }
}))
