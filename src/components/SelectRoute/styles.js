import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  button: {
    width: '100%',
    borderRadius: theme.spacing(1),
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentSearch: {
    width: '100%',
    marginLeft: theme.spacing(1),
  },
  boxButton: {
    position: 'absolute',
    bottom: theme.spacing(4),
    width: '100%',
    left: 0,
    padding: `0 ${theme.spacing(4)}px`,
  }
}))

