import { makeStyles } from '@material-ui/core';
import colors from '../../utils/colors';

export default makeStyles(theme => ({
  umaClasseQualquer: {
    color: colors.primary,
    marginBottom: theme.spacing() // esse metodo retorna 8px de default
  },
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
  }
}))

//Se quiser saber o q é o theme (parametro na linha 4): https://material-ui.com/customization/default-theme/

