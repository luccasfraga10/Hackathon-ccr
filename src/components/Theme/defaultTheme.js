import { createMuiTheme } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const fontFamily = '"Lato", "Helvetica", "Arial", sans-serif'

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
  typography: {
    fontFamily
  }
});

defaultTheme.overrides = {
  MuiButton: {
    root: {
      textTransform: 'initial',
      borderRadius: 8,
    },
    outlined: {
      borderColor: colors.white,
      color: colors.white,
    }
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
    subtitle1: {
      fontFamily,
      fontSize: 18,
    },
    subtitle2: {
      fontFamily,
      fontSize: 18,
    },
  }
};

export default defaultTheme;
