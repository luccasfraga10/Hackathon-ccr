import { createMuiTheme } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const fontFamily = '"Lato", "Helvetica", "Arial", sans-serif'

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
  MuiTypography: {
    h1: {
      fontFamily
    },
    h2: {
      fontFamily
    },
    h3: {
      fontFamily
    },
    h4: {
      fontFamily
    },
    h5: {
      fontFamily
    },
    h6: {
      fontFamily
    },
    body1: {
      fontFamily
    },
    body2: {
      fontFamily
    },
    button: {
      fontFamily
    },
    caption: {
      fontFamily
    },
    overline: {
      fontFamily
    },
  }
};

export default defaultTheme;
