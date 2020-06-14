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
    fontWeight: 'bold',
    color: colors.black,
  },
  avatar: {
    fontSize: 14
  }
}))

//Se quiser saber o q é o theme (parametro na linha 4): https://material-ui.com/customization/default-theme/

