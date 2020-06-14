



import { makeStyles } from '@material-ui/core';
import colors from '../../utils/colors';

export default makeStyles(theme => ({
  infosTrip: {
    color: colors.grayMedium
  },
  destiny: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  tabs: {
    position: "sticky",
    top: 0,
    background: colors.white
  },
  button: {
    boxShadow: '0 24px 34px rgba(#0063F5, 22%)'
  }
}))

