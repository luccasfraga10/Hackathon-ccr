import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  paper: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    width: 'calc(100% + 48px)',
    marginLeft: -theme.spacing(3),
    height: '100vh',
  },
  title: {
    fontSize: '16px',
    display: 'block',
    marginBottom: theme.spacing(3),
    fontWeight: 'bold'
  },
  list: {
    listStyle: 'none',
    overflow: 'scroll',
    height: '100%',
    paddingBottom: '400px'
  },
  itemList: {
    marginBottom: theme.spacing(3)
  },
  itemListTitle: {
    fontSize: '14px',
    display: 'block',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1)
  },
  itemListContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemListContentText: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
  },
  iconTitle: {
    marginRight: theme.spacing(1)
  }
}))

