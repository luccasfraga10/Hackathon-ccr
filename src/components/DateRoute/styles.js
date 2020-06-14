import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  textFieldDate: {
    marginBottom: theme.spacing(3)
  },
  boxButton: {
    position: 'absolute',
    bottom: theme.spacing(4),
    width: '100%',
    left: 0,
    padding: `0 ${theme.spacing(4)}px`,
  },
  button: {
    width: '100%',
    borderRadius: theme.spacing(1),
  },
}))

