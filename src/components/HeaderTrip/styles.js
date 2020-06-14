import { makeStyles } from '@material-ui/core';
import colors from '../../utils/colors';

export default makeStyles(theme => ({
  root: {
    background: 'transparent',
    padding: `0 0 ${theme.spacing(3)}px`,
  },
  content: {
    height: '100vh',
    overflow: 'hidden',
  },
  header: {
    display: 'block',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(1),
    color: colors.primary,
  },
  description: {
    display: 'block',
    marginBottom: theme.spacing(3),
    color: colors.black,
    fontWeight: 'bold',
  },
  progress: {
    width: '100%',
  },
  iconButton: {
    width: '16px',
    minWidth: 'auto',
    marginRight: theme.spacing(2)
  }
}))

