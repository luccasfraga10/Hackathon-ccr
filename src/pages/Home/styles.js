import { makeStyles } from '@material-ui/core';
import colors from '../../utils/colors';

export default makeStyles(theme => ({
  umaClasseQualquer: {
    background: colors.bgColor,
    color: colors.primary,
    marginBottom: theme.spacing() // esse metodo retorna 8px de default
  }
}))

//Se quiser saber o q é o theme (parametro na linha 4): https://material-ui.com/customization/default-theme/

