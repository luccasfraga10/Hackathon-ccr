import { createMuiTheme } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
});

defaultTheme.overrides = {
  MuiButton: {
    root: {
      textTransform: 'initial',
      borderRadius: 0,
    },
  },
};

export default defaultTheme;
